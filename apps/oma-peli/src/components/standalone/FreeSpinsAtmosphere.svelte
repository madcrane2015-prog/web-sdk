<script lang="ts">
	let { active, intro, remaining, counterPosition }: { active: boolean; intro: boolean; remaining: number; counterPosition: { x: number; y: number; width: number } } = $props();
	const records = Array.from({ length: 18 }, (_, i) => ({
		x: (i * 37 + 7) % 100, delay: (i % 6) * 0.16,
		size: 45 + (i % 4) * 21, drift: (i % 2 ? 1 : -1) * (35 + i * 5),
		color: ['#e85bbc', '#ffd777', '#65e4e5'][i % 3],
	}));
	const stars = Array.from({ length: 32 }, (_, i) => ({
		x: (i * 43 + 5) % 100, y: (i * 29 + 9) % 100, delay: (i % 9) * 0.19,
	}));
</script>

{#if active}
	<div class="bonus-aura" aria-hidden="true"></div>
	<div class="bonus-counter" style={`left:${counterPosition.x}px;top:${counterPosition.y}px;width:${counterPosition.width}px`} role="status" aria-live="polite">
		<span>✦ VAPAAPELIT ✦</span><strong>{remaining} jäljellä</strong>
	</div>
{/if}
{#if intro}
	<div class="bonus-intro" role="status" aria-live="polite">
		<div class="particles" aria-hidden="true">
			{#each records as record, i}
				<div class="falling-record" style={`--x:${record.x}%;--delay:${record.delay}s;--size:${record.size}px;--drift:${record.drift}px;--label:${record.color};--turn:${i % 2 ? 480 : -420}deg`}>
					<div class="vinyl"><i></i></div>
				</div>
			{/each}
			{#each stars as star}
				<span class="sparkle" style={`left:${star.x}%;top:${star.y}%;--delay:${star.delay}s`}>✦</span>
			{/each}
		</div>
		<div class="intro-title"><span>LET’S ROCK!</span><h2>VAPAAPELIT</h2><p>{remaining} ilmaista pyöräytystä</p></div>
	</div>
{/if}

<style>
	.bonus-aura { position: fixed; inset: 0; z-index: 2; pointer-events: none; box-shadow: inset 0 0 45px #e0a0ffcc, inset 0 0 110px #bd42ffb3, inset 0 0 230px #7925b580; background: radial-gradient(ellipse at 50% 0%, #d678ff52, transparent 65%), radial-gradient(ellipse at 50% 100%, #ffcf702b, transparent 55%); animation: breathe 2.8s ease-in-out infinite alternate; }
	.bonus-counter { position: absolute; box-sizing: border-box; z-index: 35; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 9px 6px; border: 1px solid #ffe295aa; border-radius: 30px; background: #250d3ce8; color: #ffe8a1; box-shadow: 0 0 24px #bd56f488; font: 700 clamp(10px, 2.6vw, 15px) / 1.2 system-ui; pointer-events: none; white-space: nowrap; }
	.bonus-counter span { letter-spacing: .16em; }
	.bonus-counter strong { color: white; font-size: .85em; }
	.bonus-intro { position: fixed; inset: 0; z-index: 900; pointer-events: none; display: grid; place-items: center; overflow: hidden; background: radial-gradient(ellipse, #54226dd9, #10091beb 75%); animation: curtain 3.6s both; }
	.particles { position: absolute; inset: 0; overflow: hidden; }
	.falling-record { position: absolute; left: var(--x); top: -160px; width: var(--size); height: var(--size); animation: rain 2.5s var(--delay) cubic-bezier(.25,.35,.65,.9) both; }
	.vinyl { width: 100%; height: 100%; border-radius: 50%; background: repeating-radial-gradient(circle, #111 0 3px, #333 4px, #111 5px 7px); border: 2px solid #68606b; box-shadow: 0 5px 18px #0009, 0 0 16px #dc9cff55; display: grid; place-items: center; }
	.vinyl i { width: 34%; height: 34%; border-radius: 50%; background: var(--label); display: grid; place-items: center; box-shadow: 0 0 0 2px #000; }
	.vinyl i::after { content: ''; width: 16%; height: 16%; background: #130b1c; border-radius: 50%; }
	.sparkle { position: absolute; color: #ffe6a0; font-size: clamp(18px, 4vw, 42px); text-shadow: 0 0 16px #ffcf67; animation: twinkle 1.1s var(--delay) both 2; }
	.intro-title { position: relative; text-align: center; color: #fff1be; padding: 18px; animation: arrival .7s cubic-bezier(.18,.8,.3,1.2) both; text-shadow: 0 3px 0 #773749, 0 0 30px #e3a459; }
	.intro-title span { font: 800 clamp(13px, 3vw, 22px) system-ui; letter-spacing: .35em; }
	h2 { font: 950 clamp(34px, 10vw, 100px) / 1.05 system-ui; margin: 12px 0; letter-spacing: -.04em; }
	p { font: 700 clamp(16px, 4vw, 28px) system-ui; margin: 0; color: white; }
	@keyframes rain { from { transform: translate3d(-30px,-15vh,0) rotate(-30deg); } to { transform: translate3d(var(--drift),calc(100dvh + 340px),0) rotate(var(--turn)); } }
	@keyframes twinkle { 0%,100% { opacity: 0; transform: scale(.2) rotate(0deg); } 40% { opacity: 1; transform: scale(1) rotate(80deg); } }
	@keyframes breathe { from { opacity: .8; } to { opacity: 1; } }
	@keyframes arrival { from { opacity: 0; transform: scale(.65); } to { opacity: 1; transform: scale(1); } }
	@keyframes curtain { 0%,100% { opacity: 0; } 12%,85% { opacity: 1; } }
	@media (max-height: 500px) { .bonus-counter { padding: 5px 6px; font-size: 10px; } }
	@media (prefers-reduced-motion: reduce) { .bonus-aura, .bonus-intro, .intro-title { animation: none; } .falling-record { display: none; } .sparkle { animation: none; opacity: .45; } }
</style>
