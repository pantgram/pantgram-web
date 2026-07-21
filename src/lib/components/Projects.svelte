<script lang="ts">
	import { projects } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="projects" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-2xl">
		<div class="reveal" use:reveal>
			<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Selected work</p>
			<h2 class="font-serif text-3xl leading-tight text-ink sm:text-4xl">
				Projects
			</h2>
		</div>

		<div class="mt-12">
			{#each projects as project, i (project.title)}
				{@const href = project.live ?? project.repo}
				<article
					class="reveal border-t border-rule py-8"
					style="--reveal-delay: {i * 80}ms;"
					use:reveal
				>
					<div class="flex items-baseline gap-4">
						<span class="font-serif text-sm text-accent tabular-nums">
							{String(i + 1).padStart(2, '0')}
						</span>
						{#if href}
							<a
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								class="link-underline font-serif text-xl text-ink hover:text-accent sm:text-2xl"
							>
								{project.title}
							</a>
						{:else}
							<h3 class="font-serif text-xl text-ink sm:text-2xl">{project.title}</h3>
						{/if}
					</div>

					<p class="mt-2 text-sm text-ink-faint">
						{project.category} · {project.metrics}
					</p>
					<p class="mt-3 leading-relaxed text-ink-dim">{project.description}</p>

					<div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
						<span class="text-ink-faint">{project.tech.join(' · ')}</span>
						<span class="flex gap-4">
							{#if project.repo}
								<a
									href={project.repo}
									target="_blank"
									rel="noopener noreferrer"
									class="link-underline text-ink-dim hover:text-ink"
								>Code <span aria-hidden="true">&nearr;</span></a>
							{/if}
							{#if project.live}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
									class="link-underline text-ink-dim hover:text-ink"
								>Live <span aria-hidden="true">&nearr;</span></a>
							{/if}
						</span>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
