<script lang="ts">
	import { experience } from '$lib/data';
	import type { ExperienceItem } from '$lib/data';
</script>

{#snippet typeBadge(type: ExperienceItem['type'])}
	{#if type === 'Full-time'}
		<span class="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">{type}</span>
	{:else if type === 'Contract'}
		<span class="rounded-full bg-primary-500/10 px-2.5 py-0.5 text-xs font-medium text-primary-400">{type}</span>
	{:else if type === 'Military Service'}
		<span class="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">{type}</span>
	{:else}
		<span class="rounded-full bg-surface-700/60 px-2.5 py-0.5 text-xs font-medium text-surface-300">{type}</span>
	{/if}
{/snippet}

<section id="experience" class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">Career</p>
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">Work Experience</h2>
			<p class="mx-auto max-w-2xl text-surface-400">
				{experience.length} roles across automation, backend and full-stack engineering.
			</p>
		</div>

		<div class="relative mx-auto max-w-4xl">
			<div class="absolute top-0 bottom-0 left-4 w-px bg-surface-800 md:left-1/2"></div>

			<div class="space-y-12">
				{#each experience as item, i}
					<div class="relative flex flex-col gap-4 md:flex-row md:gap-8 {i % 2 === 1 ? 'md:flex-row-reverse' : ''}">
						<div class="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-surface-950 md:left-1/2"></div>

						<div class="md:w-1/2 {i % 2 === 1 ? 'md:pl-10' : 'md:pr-10 md:text-right'} pl-10 md:pl-0">
							<div class="text-sm font-semibold uppercase tracking-wider text-primary-400">{item.period}</div>
							<div class="mt-1 text-sm text-surface-500">{item.location}</div>
						</div>

						<div class="md:w-1/2 pl-10 md:pl-10 {i % 2 === 1 ? 'md:pr-10' : ''}">
							<div class="rounded-2xl border border-surface-800 bg-surface-900/50 p-6 transition-all duration-300 hover:border-primary-600/30">
								<div class="mb-2 flex flex-wrap items-center gap-3">
									<h3 class="text-lg font-bold text-white">{item.role}</h3>
									{@render typeBadge(item.type)}
								</div>
								<div class="mb-3 text-sm font-medium text-primary-300">{item.company}</div>
								<p class="mb-4 text-sm leading-relaxed text-surface-400">{item.description}</p>

								<ul class="mb-4 space-y-2">
									{#each item.highlights as highlight}
										<li class="flex gap-2 text-sm text-surface-300">
											<svg class="mt-0.5 h-4 w-4 shrink-0 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
											</svg>
											<span>{highlight}</span>
										</li>
									{/each}
								</ul>

								<div class="flex flex-wrap gap-2 border-t border-surface-800 pt-4">
									{#each item.tech as t}
										<span class="rounded bg-surface-800/80 px-2 py-0.5 font-mono text-xs text-surface-300">{t}</span>
									{/each}
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
