<script lang="ts">
	import { skillCategories } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="skills" class="px-6 py-20 sm:py-24">
	<div class="mx-auto max-w-2xl">
		<div class="reveal" use:reveal>
			<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Toolkit</p>
			<h2 class="font-serif text-3xl leading-tight text-ink sm:text-4xl">
				Skills
			</h2>
		</div>

		<dl class="mt-12 border-t border-rule">
			{#each skillCategories as category, i (category.name)}
				<div
					class="reveal grid grid-cols-1 gap-1 border-b border-rule py-5 sm:grid-cols-[10rem_1fr] sm:gap-6"
					style="--reveal-delay: {i * 70}ms;"
					use:reveal
				>
					<dt class="text-xs uppercase tracking-[0.14em] text-ink-faint sm:pt-0.5">
						{category.name}
					</dt>
					<dd class="leading-relaxed text-ink">
						{category.skills.map((s) => s.name).join(', ')}
					</dd>
				</div>
			{/each}
		</dl>
	</div>
</section>
