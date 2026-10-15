import './buttonGlare.css';

/** Presentation only; never changes the button's action or disabled state. */
export function buttonGlare(node: HTMLButtonElement, active = false) {
	let previous = active;
	function play() {
		if (node.disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		node.classList.remove('oma-glare-running');
		void node.offsetWidth;
		node.classList.add('oma-glare-running');
	}
	node.classList.add('oma-button-glare');
	node.addEventListener('pointerenter', play);
	node.addEventListener('focus', play);
	node.addEventListener('click', play);
	if (active) play();
	return {
		update(value = false) {
			if (value && !previous) play();
			previous = value;
		},
		destroy() {
			node.removeEventListener('pointerenter', play);
			node.removeEventListener('focus', play);
			node.removeEventListener('click', play);
			node.classList.remove('oma-button-glare', 'oma-glare-running');
		},
	};
}
