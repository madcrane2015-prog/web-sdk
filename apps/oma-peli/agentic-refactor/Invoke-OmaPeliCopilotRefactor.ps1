[CmdletBinding(DefaultParameterSetName = 'DryRun')]
param(
  [Parameter(ParameterSetName = 'Execute')]
  [switch]$Execute,

  [Parameter(ParameterSetName = 'DryRun')]
  [switch]$DryRun,

  [string[]]$Phase = @(),

  [switch]$AllPhases,

  [int]$MaxPhases = 0,

  [string]$Model = 'gpt-5.5',

  [string]$ReasoningEffort = 'minimal',

  [string[]]$ModelArgs = @(),

  [string[]]$AllowedTools = @(
    'shell(git)',
    'shell(pnpm)',
    'shell(node)',
    'shell(npx)',
    'shell(powershell)',
    'shell(Get-ChildItem)',
    'shell(Select-String)'
  ),

  [switch]$AllowDirty,

  [switch]$NoPush,

  [string]$Remote = 'origin'
)

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

function Write-Info {
  param([string]$Message)
  Write-Host "[oma-peli-runner] $Message"
}

function Get-RepoRoot {
  $root = (& git rev-parse --show-toplevel 2>$null).Trim()
  if (-not $root) {
    throw 'This script must be run from inside the web-sdk git repository.'
  }
  return $root
}

function Assert-CommandExists {
  param([string]$Name)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    throw "Required command '$Name' was not found in PATH."
  }
}

function Assert-FileExists {
  param([string]$Path)
  if (-not (Test-Path -LiteralPath $Path)) {
    throw "Required file was not found: $Path"
  }
}

function Get-PlanPhaseIds {
  param([string]$PlanPath)

  $ids = New-Object System.Collections.Generic.List[string]
  foreach ($line in Get-Content -LiteralPath $PlanPath) {
    if ($line -match "^\s+-\s+id:\s+'(phase_[^']+)'") {
      [void]$ids.Add($Matches[1])
    }
  }

  if ($ids.Count -eq 0) {
    throw "No phase IDs were found in $PlanPath. Expected lines like: - id: 'phase_01_...'"
  }

  return $ids.ToArray()
}

function New-PhasePrompt {
  param(
    [string]$TemplatePath,
    [string]$OutputDir,
    [string]$PhaseId,
    [string]$ModelName,
    [string]$Reasoning
  )

  $content = Get-Content -LiteralPath $TemplatePath -Raw
  $content = $content.Replace('{{PHASE_ID}}', $PhaseId)
  $content = $content.Replace('{{MODEL}}', $ModelName)
  $content = $content.Replace('{{REASONING_EFFORT}}', $Reasoning)

  if (-not (Test-Path -LiteralPath $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir | Out-Null
  }

  $outputPath = Join-Path $OutputDir "$PhaseId.prompt.md"
  Set-Content -LiteralPath $outputPath -Value $content -Encoding UTF8
  return $outputPath
}

function Assert-GitReadyForExecution {
  param(
    [bool]$AllowDirtyWorktree,
    [string]$RemoteName
  )

  $inside = (& git rev-parse --is-inside-work-tree).Trim()
  if ($inside -ne 'true') {
    throw 'Not inside a git worktree.'
  }

  $branch = (& git branch --show-current).Trim()
  if (-not $branch) {
    throw 'Current git checkout is detached; refusing to run autonomous phase execution.'
  }

  & git remote get-url $RemoteName | Out-Null

  $status = & git status --porcelain=v1
  if ($status -and -not $AllowDirtyWorktree) {
    $statusText = $status -join [Environment]::NewLine
    throw "Worktree is dirty. Commit/stash unrelated changes or rerun with -AllowDirty after reviewing the baseline. Current status:`n$statusText"
  }
}

function Assert-GhAuthReady {
  $previousErrorActionPreference = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  $authOutput = & gh auth status 2>&1
  $authExitCode = $LASTEXITCODE
  $ErrorActionPreference = $previousErrorActionPreference
  if ($authExitCode -ne 0) {
    $authText = $authOutput -join [Environment]::NewLine
    throw "GitHub CLI is not authenticated. Run 'gh auth login' in a terminal, then rerun this script. gh auth status output:`n$authText"
  }
}

function Invoke-CopilotPhase {
  param(
    [string]$PhaseId,
    [string]$PromptPath,
    [string[]]$ExtraModelArgs,
    [string[]]$ToolAllowList,
    [bool]$PushEnabled,
    [string]$RemoteName
  )

  $prompt = Get-Content -LiteralPath $PromptPath -Raw

  if (-not $PushEnabled) {
    $prompt += "`n`nAdditional runner override: Do not push. You may commit locally if needed, but record that push was disabled by the runner."
  } else {
    $prompt += "`n`nAdditional runner context: Push commits to remote '$RemoteName' on the current branch."
  }

  $args = @('copilot', '-p', $prompt)
  $args += $ExtraModelArgs
  foreach ($tool in $ToolAllowList) {
    $args += @('--allow-tool', $tool)
  }

  Write-Info "Starting Copilot CLI for phase $PhaseId"
  Write-Info "Command: gh $($args[0..([Math]::Min($args.Count - 1, 8))] -join ' ') ..."

  & gh @args
  $exitCode = $LASTEXITCODE
  if ($exitCode -ne 0) {
    throw "Copilot CLI failed for phase $PhaseId with exit code $exitCode."
  }
}

$repoRoot = Get-RepoRoot
Set-Location $repoRoot

$appRoot = Join-Path $repoRoot 'apps/oma-peli'
$planPath = Join-Path $appRoot 'OMA_PELI_REFACTOR_PLAN.yaml'
$masterPath = Join-Path $appRoot 'OMA_PELI_TECHNICAL_DEEP_DIVE.md'
$agentsPath = Join-Path $appRoot 'AGENTS.md'
$templatePath = Join-Path $appRoot 'agentic-refactor/phase-prompt.template.md'
$generatedPromptDir = Join-Path $appRoot 'agentic-refactor/generated-prompts'

Assert-CommandExists git
Assert-CommandExists gh
Assert-CommandExists pnpm
Assert-FileExists $planPath
Assert-FileExists $masterPath
Assert-FileExists $agentsPath
Assert-FileExists $templatePath

$availablePhases = Get-PlanPhaseIds -PlanPath $planPath

if ($AllPhases) {
  $selectedPhases = $availablePhases
} elseif ($Phase.Count -gt 0) {
  $selectedPhases = $Phase
} else {
  $selectedPhases = $availablePhases
}

foreach ($phaseId in $selectedPhases) {
  if ($availablePhases -notcontains $phaseId) {
    throw "Unknown phase '$phaseId'. Known phases: $($availablePhases -join ', ')"
  }
}

if ($MaxPhases -gt 0 -and $selectedPhases.Count -gt $MaxPhases) {
  $selectedPhases = $selectedPhases | Select-Object -First $MaxPhases
}

if (-not $DryRun -and -not $Execute) {
  $DryRun = $true
}

Write-Info "Repository root: $repoRoot"
Write-Info "Selected phases: $($selectedPhases -join ', ')"
Write-Info "Mode: $(if ($Execute) { 'execute' } else { 'dry-run' })"

if ($Execute) {
  Assert-GhAuthReady
  Assert-GitReadyForExecution -AllowDirtyWorktree:$AllowDirty.IsPresent -RemoteName $Remote
  & gh copilot --help | Out-Null
}

if ($ModelArgs.Count -eq 0) {
  $ModelArgs = @('--model', $Model, '--reasoning-effort', $ReasoningEffort)
}

foreach ($phaseId in $selectedPhases) {
  $promptPath = New-PhasePrompt `
    -TemplatePath $templatePath `
    -OutputDir $generatedPromptDir `
    -PhaseId $phaseId `
    -ModelName $Model `
    -Reasoning $ReasoningEffort

  Write-Info "Prepared prompt: $promptPath"

  if ($DryRun -and -not $Execute) {
    continue
  }

  Invoke-CopilotPhase `
    -PhaseId $phaseId `
    -PromptPath $promptPath `
    -ExtraModelArgs $ModelArgs `
    -ToolAllowList $AllowedTools `
    -PushEnabled:(!$NoPush.IsPresent) `
    -RemoteName $Remote
}

Write-Info 'Runner completed.'
