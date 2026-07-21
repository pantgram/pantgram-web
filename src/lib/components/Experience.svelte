<script lang="ts">
	import { experience } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="experience" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-2xl">
		<div class="reveal" use:reveal>
			<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Career</p>
			<h2 class="font-serif text-3xl leading-tight text-ink sm:text-4xl">
				Work experience
			</h2>
		</div>

		<div class="mt-12">
			{#each experience as item, i (item.company)}
				<article
					class="reveal border-t border-rule py-8"
					style="--reveal-delay: {i * 80}ms;"
					use:reveal
				>
					<p class="text-sm text-ink-faint">{item.period}</p>
					<h3 class="mt-1.5 font-serif text-xl text-ink sm:text-2xl">
						{item.role}
						<span class="font-serif-italic text-ink-dim">&nbsp;at {item.company}</span>
					</h3>
					<p class="mt-1 text-sm text-ink-faint">{item.location}</p>
					<p class="mt-3 leading-relaxed text-ink-dim">{item.description}</p>
					<p class="mt-3 text-sm text-ink-faint">{item.tech.join(' · ')}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
