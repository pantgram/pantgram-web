/**
 * use:reveal — scroll-triggered reveal.
 * Pairs with the `.reveal` CSS rule in app.css. Sets `data-revealed='true'`
 * on the node when it intersects the viewport, then unobserves.
 *
 * Usage:
 *   <div class="reveal" use:reveal>...</div>
 *   <div class="reveal" use:reveal={{ delay: 120 }}>...</div>
 */
export interface RevealOptions {
	delay?: number;
	threshold?: number;
	once?: boolean;
}

export function reveal(node: HTMLElement, opts: RevealOptions = {}) {
	const { delay = 0, threshold = 0.15, once = true } = opts;

	if (delay) {
		node.style.setProperty('--reveal-delay', `${delay}ms`);
	}

	if (typeof IntersectionObserver === 'undefined') {
		node.setAttribute('data-revealed', 'true');
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.setAttribute('data-revealed', 'true');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.setAttribute('data-revealed', 'false');
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
