<script lang="ts">
	import { services } from '$lib/data';
	import type { ServiceIcon } from '$lib/data';
</script>

{#snippet iconSvg(icon: ServiceIcon)}
	{#if icon === 'api'}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
	{:else if icon === 'ai'}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
	{:else if icon === 'data'}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
	{:else if icon === 'infra'}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
	{:else if icon === 'micro'}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
	{:else}
		<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
	{/if}
{/snippet}

<section id="services" class="bg-surface-900/30 px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">Services</p>
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">What I Can Build for You</h2>
			<p class="mx-auto max-w-2xl text-surface-400">
				End-to-end engineering solutions from API design to AI-powered automation,
				delivered with production-grade quality.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each services as service}
				<div class="group rounded-2xl border border-surface-800 bg-surface-900/50 p-6 transition-all duration-300 hover:border-primary-600/50 hover:bg-surface-900/80 hover:shadow-lg hover:shadow-primary-600/5">
					<div class="mb-4 inline-flex rounded-xl bg-primary-600/10 p-3 text-primary-400">
						{@render iconSvg(service.icon)}
					</div>

					<h3 class="mb-2 text-lg font-bold text-white">{service.title}</h3>
					<p class="mb-4 text-sm leading-relaxed text-surface-400">{service.description}</p>

					<div class="flex flex-wrap gap-2">
						{#each service.features as feature}
							<span class="rounded-full bg-surface-800 px-3 py-1 text-xs font-medium text-surface-300">
								{feature}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
