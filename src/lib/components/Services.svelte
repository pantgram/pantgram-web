<script lang="ts">
	import { services } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="services" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-2xl">
		<div class="reveal" use:reveal>
			<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Services</p>
			<h2 class="font-serif text-3xl leading-tight text-ink sm:text-4xl">
				What I can build
			</h2>
		</div>

		<div class="mt-12">
			{#each services as service, i (service.title)}
				<article
					class="reveal border-t border-rule py-8"
					style="--reveal-delay: {i * 80}ms;"
					use:reveal
				>
					<div class="flex items-baseline gap-4">
						<span class="font-serif text-sm text-accent tabular-nums">
							{String(i + 1).padStart(2, '0')}
						</span>
						<h3 class="font-serif text-xl text-ink sm:text-2xl">{service.title}</h3>
					</div>
					<p class="mt-4 leading-relaxed text-ink-dim">{service.description}</p>
					<p class="mt-3 text-sm text-ink-faint">
						{service.features.join(' · ')}
					</p>
				</article>
			{/each}
		</div>
	</div>
</section>
