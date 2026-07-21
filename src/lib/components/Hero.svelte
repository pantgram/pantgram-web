<script lang="ts">
	import { about, site } from '$lib/data';
</script>

<section class="px-6 pt-28 pb-24 sm:pt-36 sm:pb-32">
	<div class="mx-auto max-w-2xl">
		<p class="mb-6 text-sm tracking-wide text-accent">
			{about.heroTaglineHighlight}
		</p>

		<h1 class="font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
			{about.heroTagline}
		</h1>

		<p class="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
			{about.heroDescription}
		</p>

		<div class="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
			<a href="#projects" class="link-underline font-medium text-ink">
				Selected work <span aria-hidden="true">&rarr;</span>
			</a>
			<a href="mailto:{site.contact.email}" class="link-underline font-medium text-ink-dim hover:text-ink">
				Email me <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</div>
</section>
