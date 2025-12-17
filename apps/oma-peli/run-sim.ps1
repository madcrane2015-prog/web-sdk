param(
  [int]$Spins = 0,
  [string]$Config = ""
)

$ErrorActionPreference = "Stop"

Write-Host "=== ROCKABILLY REELS MATH SIMULATOR (CJS) ==="
Write-Host ""
Write-Host "Project: $PSScriptRoot"
Write-Host ""

# Node check
try {
  $nodeVer = node -v
  Write-Host "Node: $nodeVer"
} catch {
  Write-Host "ERROR: Node not found in PATH. Install Node.js and reopen PowerShell." -ForegroundColor Red
  exit 1
}

# Optional overrides via env
if ($Spins -gt 0) {
  $env:SIM_SPINS = "$Spins"
  Write-Host "Spins override: $env:SIM_SPINS"
}

if ($Config -and $Config.Trim().Length -gt 0) {
  if (-not (Test-Path $Config)) {
    Write-Host "ERROR: Config file not found: $Config" -ForegroundColor Red
    exit 1
  }
  $env:MATH_CONFIG = (Resolve-Path $Config).Path
  Write-Host "Config override: $env:MATH_CONFIG"
}

Write-Host ""
Write-Host "Running simulator..."
Write-Host ""

$simPath = Join-Path $PSScriptRoot "src\tools\math-sim.cjs"
if (-not (Test-Path $simPath)) {
  Write-Host "ERROR: Simulator not found: $simPath" -ForegroundColor Red
  exit 1
}

node $simPath

Write-Host ""
Write-Host "Done. Press Enter to close."
[void][System.Console]::ReadLine()
