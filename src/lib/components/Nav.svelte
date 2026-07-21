<script lang="ts">
	import { site } from '$lib/data';

	let mobileOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b border-surface-800/50 bg-surface-950/80 backdrop-blur-lg">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
		<a href="/" class="text-xl font-bold tracking-tight text-white">
			<span class="text-primary-400">&lt;</span>{site.brandName}<span class="text-primary-400">/&gt;</span>
		</a>

		<div class="hidden items-center gap-8 md:flex">
			{#each site.navLinks as link}
				<a
					href={link.href}
					class="text-sm font-medium text-surface-300 transition-colors hover:text-primary-400"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<button
			class="text-surface-300 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
		>
			{#if mobileOpen}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-surface-800/50 bg-surface-950/95 px-6 py-4 backdrop-blur-lg md:hidden">
			{#each site.navLinks as link}
				<a
					href={link.href}
					class="block py-3 text-sm font-medium text-surface-300 transition-colors hover:text-primary-400"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
