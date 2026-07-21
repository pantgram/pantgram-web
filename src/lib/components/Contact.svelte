<script lang="ts">
	import { site } from '$lib/data';
	import { reveal } from '$lib/actions';
</script>

<section id="contact" class="px-6 py-24 sm:py-32">
	<div class="mx-auto max-w-2xl reveal" use:reveal>
		<p class="mb-3 text-xs uppercase tracking-[0.18em] text-ink-faint">Contact</p>
		<h2 class="font-serif text-3xl leading-tight text-ink sm:text-5xl">
			Let&rsquo;s talk.
		</h2>

		<p class="mt-6 max-w-lg leading-relaxed text-ink-dim">
			Have a project in mind, or need a hand with backend architecture or AI
			automation? I&rsquo;m always glad to talk through ideas.
		</p>

		<a
			href="mailto:{site.contact.email}"
			class="link-underline mt-8 inline-block font-serif text-2xl text-ink hover:text-accent sm:text-3xl"
		>
			{site.contact.email}
		</a>

		<div class="mt-8 flex flex-wrap items-center gap-x-7 gap-y-2 text-sm">
			{#each site.socials as social (social.platform)}
				<a
					href={social.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.ariaLabel}
					class="link-underline text-ink-dim hover:text-ink"
				>
					{social.platform}
				</a>
			{/each}
			<span class="text-ink-faint">{site.contact.location}</span>
		</div>
	</div>
</section>
