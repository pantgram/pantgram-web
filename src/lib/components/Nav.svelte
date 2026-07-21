<script lang="ts">
	import { site } from '$lib/data';

	let mobileOpen = $state(false);
</script>

<nav class="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-[2px]">
	<div class="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
		<a href="/" class="font-serif-italic text-lg text-ink">
			{site.brandName}
		</a>

		<div class="hidden items-center gap-7 md:flex">
			{#each site.navLinks as link}
				<a
					href={link.href}
					class="link-underline text-sm text-ink-dim hover:text-ink"
				>
					{link.label}
				</a>
			{/each}
		</div>

		<button
			class="text-ink-dim md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
		>
			<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 12h16M4 17h16" />
				{/if}
			</svg>
		</button>
	</div>

	{#if mobileOpen}
		<div class="border-t border-rule px-6 py-3 md:hidden">
			{#each site.navLinks as link}
				<a
					href={link.href}
					class="block py-2.5 text-sm text-ink-dim hover:text-ink"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
