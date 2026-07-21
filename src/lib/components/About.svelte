<script lang="ts">
	import { about } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="about" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-2xl reveal" use:reveal>
		<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">About</p>
		<h2 class="font-serif text-3xl leading-tight text-ink sm:text-4xl">
			{about.heading}
			<span class="font-serif-italic text-accent">&nbsp;{about.headingHighlight}</span>
		</h2>

		<div class="mt-7 space-y-5 leading-relaxed text-ink-dim">
			{#each about.bio as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<p class="mt-7 leading-relaxed text-ink-dim">
			Day to day I work across
			{#each about.expertise as item, i (item.label)}
				{#if i > 0}, {/if}
				<span class="font-medium text-ink">{item.label}</span>
				<span class="text-ink-faint">&thinsp;({item.description.toLowerCase()})</span>
			{/each}.
		</p>
	</div>
</section>
