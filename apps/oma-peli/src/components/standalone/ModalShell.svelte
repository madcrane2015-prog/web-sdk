<script lang="ts">
	import { onMount } from 'svelte';
	import type { StandaloneUILayoutTokens } from '../../game-standalone/uiLayout';

	interface ModalShellProps {
		title: string;
		gameScale: number;
		uiLayoutTokens: StandaloneUILayoutTokens;
		onClose: () => void;
	}

	let { title, gameScale, uiLayoutTokens, onClose }: ModalShellProps = $props();

	onMount(() => {
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				onClose();
			}
		}

		window.addEventListener('keydown', handleKeydown);
		return () => window.removeEventListener('keydown', handleKeydown);
	});
</script>

<div class="modal-backdrop" role="presentation" onclick={onClose}>
	<section
		class="paytable-modal"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-shell-title"
		onclick={(event) => event.stopPropagation()}
		style="
			padding: {uiLayoutTokens.modalPadding}px;
			border-radius: {15 * gameScale}px;
			border-width: {3 * gameScale}px;
			width: min(calc(100vw - {uiLayoutTokens.modalViewportMargin *
			2}px), {uiLayoutTokens.modalMaxWidth}px);
			max-width: min(calc(100vw - {uiLayoutTokens.modalViewportMargin *
			2}px), {uiLayoutTokens.modalMaxWidth}px);
			max-height: min(calc(100dvh - {uiLayoutTokens.modalViewportMargin *
			2}px), {uiLayoutTokens.modalMaxHeightVh}dvh);
			font-size: {uiLayoutTokens.modalFontScale}em;
		"
	>
		<header class="modal-header">
			<h2 id="modal-shell-title">{title}</h2>
			<button type="button" onclick={onClose} class="paytable-close-top" aria-label="Close menu">
				Sulje
			</button>
		</header>

		<div class="modal-body">
			<slot></slot>
		</div>
	</section>
</div>

<style>
	.modal-backdrop {
		position: fixed;
		inset: 0;
		z-index: 3000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: max(12px, env(safe-area-inset-top)) max(12px, env(safe-area-inset-right))
			max(12px, env(safe-area-inset-bottom)) max(12px, env(safe-area-inset-left));
		background: rgba(0, 0, 0, 0.42);
		box-sizing: border-box;
	}

	.paytable-modal {
		background:
			linear-gradient(180deg, rgba(18, 10, 16, 0.98), rgba(0, 0, 0, 0.96)), rgba(0, 0, 0, 0.95);
		color: white;
		box-sizing: border-box;
		font-family: Arial, sans-serif;
		border-style: solid;
		border-color: #ffd700;
		overflow-y: auto;
		scrollbar-color: #ffd700 rgba(255, 255, 255, 0.08);
	}

	.modal-header {
		position: sticky;
		top: 0;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: start;
		gap: 12px;
		margin-bottom: 20px;
		padding-bottom: 12px;
		background: linear-gradient(180deg, rgba(18, 10, 16, 0.98), rgba(18, 10, 16, 0.9));
		border-bottom: 1px solid rgba(255, 215, 0, 0.24);
	}

	h2 {
		margin: 0;
		text-align: center;
		color: #ffd700;
	}

	.paytable-close-top {
		min-width: 64px;
		min-height: 40px;
		padding: 8px 12px;
		background: #ffd700;
		color: #333;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
	}

	.paytable-close-top:hover,
	.paytable-close-top:focus-visible {
		background: #ffe775;
		outline: 2px solid rgba(255, 255, 255, 0.8);
		outline-offset: 2px;
	}
</style>
