# Oma Peli Agentic Refactor Runner

This folder contains a guarded orchestration system for running the oma-peli refactor plan with GitHub Copilot CLI one phase at a time.

The runner is intentionally conservative:

- Dry-run is the default.
- Real execution requires `-Execute`.
- Each Copilot CLI invocation receives exactly one phase ID.
- The prompt requires the agent to update `OMA_PELI_REFACTOR_PLAN.yaml`, `OMA_PELI_TECHNICAL_DEEP_DIVE.md`, and `AGENTS.md` when appropriate.
- The prompt requires clear commits and pushes for each phase.
- The runner performs preflight checks and can stop on a dirty worktree unless `-AllowDirty` is supplied.

## Files

- `Invoke-OmaPeliCopilotRefactor.ps1`: PowerShell runner.
- `phase-prompt.template.md`: Prompt template sent to Copilot CLI for each phase.

## Dry Run

From the repository root:

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -DryRun
```

Dry-run validates the expected files and prints the phases and generated prompt paths. It does not call Copilot CLI.

All-phase dry-run was validated on 2026-07-05. Real execution was not started because GitHub CLI was not authenticated and the worktree had unrelated dirty/untracked files.

## Execute One Phase

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -Execute -Phase phase_01_baseline_and_compile_hygiene
```

## Execute All Phases

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -Execute -AllPhases
```

## Important Notes

- The runner targets `gh copilot -p "..."` because `gh copilot --help` is available in this workspace.
- The direct `copilot` shim prompted for installation and did not complete during validation; do not rely on it until installed separately.
- Real execution requires `gh auth login` first, because the runner expects phase agents to commit and push.
- The default requested model is `gpt-5.5` and default reasoning effort is `minimal`, as requested. If the installed CLI does not support those flags, override `-ModelArgs`.
- Use `-NoPush` only for local testing. Real autonomous execution is intended to push phase commits.
- Use `-AllowDirty` only if you understand the current uncommitted baseline. The prompt still tells the phase agent not to commit unrelated changes.

## Safety Recommendation

Run the first real phase alone before running all phases:

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -Execute -Phase phase_00_workflow_and_docs -NoPush
```

Then inspect the resulting changes before allowing push-enabled all-phase execution.
