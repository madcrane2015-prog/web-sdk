<script lang="ts">
	import type { StatusMetersProps } from './controlPanelApi';

	let {
		balance,
		betAmount,
		lastWin,
		gameScale = 1,
		mode,
		label,
		value,
		accent = false,
	}: StatusMetersProps = $props();

	const formatAmount = (amount: number) =>
		amount.toLocaleString('en-US', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
</script>

{#if mode === 'strip'}
	<div class="mobile-status-strip" aria-label="Current game status">
		<div class="mobile-status-item">
			<span>Balance</span>
			<strong>{formatAmount(balance)}</strong>
		</div>
		<div class="mobile-status-item mobile-status-accent">
			<span>Bet</span>
			<strong>{betAmount.toFixed(2)}</strong>
		</div>
		<div class="mobile-status-item">
			<span>Win</span>
			<strong>{formatAmount(lastWin)}</strong>
		</div>
	</div>
{:else if label && typeof value === 'number'}
	<div class="status-meter" class:status-meter-accent={accent}>
		<div
			class="status-meter-label"
			style="font-size: {12 * gameScale}px; height: {16 * gameScale}px; padding-bottom: {2 *
				gameScale}px;"
		>
			{label}
		</div>
		<div class="status-meter-value-wrap" style="height: {44 * gameScale}px;">
			<div class="status-meter-value" style="font-size: {20 * gameScale}px;">
				{formatAmount(value)}
			</div>
		</div>
	</div>
{/if}

<style>
	.mobile-status-strip {
		display: none;
	}

	.mobile-status-item {
		min-width: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2px;
		padding: 6px 8px;
		border: 1px solid rgba(255, 215, 0, 0.28);
		border-radius: 8px;
		background: rgba(0, 0, 0, 0.58);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.32);
		color: #ffffff;
		overflow: hidden;
	}

	.mobile-status-item span {
		font-size: 9px;
		line-height: 1;
		font-weight: 700;
		text-transform: uppercase;
		color: #ffd700;
	}

	.mobile-status-item strong {
		max-width: 100%;
		font-family: 'Courier New', monospace;
		font-size: 12px;
		line-height: 1;
		font-weight: 800;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.mobile-status-accent {
		border-color: rgba(0, 255, 0, 0.32);
	}

	.status-meter {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 0;
	}

	.status-meter-label {
		display: flex;
		align-items: flex-end;
		color: #00ff00;
		font-weight: bold;
		line-height: 1;
	}

	.status-meter-value-wrap {
		display: flex;
		align-items: center;
		max-width: 100%;
	}

	.status-meter-value {
		max-width: 100%;
		color: #fff;
		font-weight: bold;
		font-family: 'Courier New', monospace;
		font-variant-numeric: tabular-nums;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	@media (max-width: 768px) and (orientation: portrait) {
		.mobile-status-strip {
			position: fixed;
			left: max(var(--oma-mobile-status-horizontal-margin), env(safe-area-inset-left));
			right: max(var(--oma-mobile-status-horizontal-margin), env(safe-area-inset-right));
			bottom: calc(var(--oma-mobile-status-bottom) + env(safe-area-inset-bottom));
			display: grid;
			grid-template-columns: minmax(0, 1fr) minmax(64px, 0.72fr) minmax(0, 1fr);
			gap: 6px;
			z-index: 1250;
			pointer-events: none;
		}
	}

	@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.mobile-status-strip {
			position: fixed;
			left: max(var(--oma-mobile-status-horizontal-margin), env(safe-area-inset-left));
			bottom: calc(var(--oma-mobile-status-bottom) + env(safe-area-inset-bottom));
			display: grid;
			grid-template-columns: repeat(3, minmax(58px, 1fr));
			gap: 5px;
			width: min(230px, calc(100vw - 520px));
			z-index: 1250;
			pointer-events: none;
		}

		.mobile-status-item {
			padding: 5px 6px;
			border-radius: 7px;
		}

		.mobile-status-item span {
			font-size: 8px;
		}

		.mobile-status-item strong {
			font-size: 11px;
		}
	}
</style>
