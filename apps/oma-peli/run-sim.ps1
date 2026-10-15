param(
  [ValidateRange(1, 100000000)] [int]$Spins = 1000000,
  [string]$Config = ""
)
$ErrorActionPreference = "Stop"
if ($Config) {
  throw "External YAML math is historical. The maintained audit imports the active TypeScript rules; edit and review those rules explicitly."
}
$simPath = Join-Path $PSScriptRoot "scripts/run-rtp-audit.mjs"
node $simPath $Spins
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
