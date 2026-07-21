<script lang="ts">
	import { about } from '$lib/data';
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<section class="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary-600/20 blur-[128px]"></div>
		<div class="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-primary-400/10 blur-[128px]"></div>
	</div>

	<div
		class="relative z-10 mx-auto max-w-4xl text-center transition-all duration-1000"
		class:opacity-0={!visible}
		class:translate-y-10={!visible}
		class:opacity-100={visible}
		class:translate-y-0={visible}
	>

		<h1 class="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
			{about.heroTagline}
			<br />
			<span class="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
				{about.heroTaglineHighlight}
			</span>
		</h1>

		<p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-surface-400 sm:text-xl">
			{about.heroDescription}
		</p>

		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<a
				href="#projects"
				class="rounded-xl bg-primary-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-500 hover:shadow-primary-500/30"
			>
				View My Work
			</a>
			<a
				href="#contact"
				class="rounded-xl border border-surface-700 bg-surface-800/50 px-8 py-3.5 text-base font-semibold text-surface-200 transition-all hover:border-surface-600 hover:bg-surface-800"
			>
				Get in Touch
			</a>
		</div>

	
	</div>

	<div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-surface-500">
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
		</svg>
	</div>
</section>
