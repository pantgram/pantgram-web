<script lang="ts">
	import { site } from '$lib/data';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-surface-800 bg-surface-950 px-6 py-8">
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
		<div class="text-sm text-surface-500">
			&copy; {currentYear} <span class="text-surface-300">{site.brandName}</span>. All rights reserved.
		</div>
		<div class="flex items-center gap-1 text-sm text-surface-500">
			Built with
			<svg class="mx-1 h-4 w-4 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
			</svg>
			using SvelteKit &amp; Tailwind CSS
		</div>
	</div>
</footer>
