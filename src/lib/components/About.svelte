<script lang="ts">
	import { about } from '$lib/data';
</script>

<section id="about" class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="grid items-center gap-16 lg:grid-cols-2">
			<div>
				<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">About Me</p>
				<h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
					{about.heading}
					<span class="text-primary-400">{about.headingHighlight}</span>
				</h2>
				<div class="space-y-4 text-surface-400 leading-relaxed">
					{#each about.bio as paragraph}
						<p>{paragraph}</p>
					{/each}
				</div>

				<div class="mt-8 grid grid-cols-2 gap-4">
					{#each about.expertise as item}
						<div class="rounded-xl border border-surface-800 bg-surface-900/50 p-4">
							<div class="mb-1 text-2xl font-bold text-primary-400">{item.label}</div>
							<div class="text-sm text-surface-400">{item.description}</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="relative">
				<div class="rounded-2xl border border-surface-800 bg-surface-900/80 p-6 font-mono text-sm">
					<div class="mb-4 flex items-center gap-2">
						<div class="h-3 w-3 rounded-full bg-red-500"></div>
						<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
						<div class="h-3 w-3 rounded-full bg-green-500"></div>
						<span class="ml-2 text-xs text-surface-500">pantgram@engineer</span>
					</div>
					<pre class="text-surface-300">{about.codeSnippet}</pre>
				</div>
				<div class="pointer-events-none absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary-600/20 blur-3xl"></div>
			</div>
		</div>
	</div>
</section>
