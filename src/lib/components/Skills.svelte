<script lang="ts">
	import { skillCategories } from '$lib/data';
</script>

<section id="skills" class="bg-surface-900/30 px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">Skills</p>
			<h2 class="mb-4 text-3xl font-bold text-white sm:text-4xl">Technical Arsenal</h2>
			<p class="mx-auto max-w-2xl text-surface-400">
				Years of hands-on experience across the full backend and AI engineering spectrum.
			</p>
		</div>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each skillCategories as category}
				<div class="rounded-2xl border border-surface-800 bg-surface-900/50 p-6">
					<h3 class="mb-5 text-sm font-bold uppercase tracking-wider text-primary-400">
						{category.name}
					</h3>
					<div class="space-y-4">
						{#each category.skills as skill}
							<div>
							<div class="mb-1.5">
								<span class="text-sm font-medium text-surface-200">{skill.name}</span>
							</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
