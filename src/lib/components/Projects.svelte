<script lang="ts">
	import { projects } from '$lib/data';
</script>

<section id="projects" class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">Portfolio</p>
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
			<p class="mx-auto max-w-2xl text-surface-400">
				A selection of production-grade systems I've designed and built
				across backend engineering and AI automation.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<div class="group flex flex-col rounded-2xl border border-surface-800 bg-surface-900/50 p-6 transition-all duration-300 hover:border-primary-600/30 hover:shadow-lg hover:shadow-primary-600/5">
					<div class="mb-4 flex items-center justify-between">
						<span class="rounded-full bg-primary-600/10 px-3 py-1 text-xs font-medium text-primary-400">
							{project.category}
						</span>
						<span class="text-xs font-semibold text-emerald-400">{project.metrics}</span>
					</div>

					<h3 class="mb-2 text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
						{project.title}
					</h3>
					<p class="mb-4 flex-1 text-sm leading-relaxed text-surface-400">
						{project.description}
					</p>

					<div class="flex flex-wrap gap-2 border-t border-surface-800 pt-4">
						{#each project.tech as t}
							<span class="rounded bg-surface-800/80 px-2 py-0.5 font-mono text-xs text-surface-300">
								{t}
							</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
