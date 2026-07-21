<script lang="ts">
	import { site, about } from '$lib/data';
	import type { SocialLink } from '$lib/data';

	let formData = $state({
		name: '',
		email: '',
		subject: '',
		message: ''
	});

	let submitted = $state(false);

	function handleSubmit(e: Event) {
		e.preventDefault();
		submitted = true;
	}
</script>

{#snippet socialIcon(icon: SocialLink['icon'])}
	{#if icon === 'github'}
		<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
	{:else}
		<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
	{/if}
{/snippet}

<section id="contact" class="px-6 py-24">
	<div class="mx-auto max-w-7xl">
		<div class="grid gap-16 lg:grid-cols-2">
			<div>
				<p class="mb-2 text-sm font-semibold uppercase tracking-widest text-primary-400">Contact</p>
				<h2 class="mb-6 text-3xl font-bold text-white sm:text-4xl">
					Let's build something
					<span class="text-primary-400">together</span>
				</h2>
				<p class="mb-8 text-surface-400 leading-relaxed">
					Have a project in mind? Need help with backend architecture or AI
					automation? I'd love to hear about it. Drop me a message and let's
					discuss how we can bring your ideas to life.
				</p>

				<div class="space-y-6">
					<a href="mailto:{site.contact.email}" class="flex items-center gap-4 transition-opacity hover:opacity-80">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-600/10 text-primary-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
						</div>
						<div>
							<div class="text-sm text-surface-500">Email</div>
							<div class="font-medium text-surface-200">{site.contact.email}</div>
						</div>
					</a>
					<a href="tel:{site.contact.phone.replace(/\s/g, '')}" class="flex items-center gap-4 transition-opacity hover:opacity-80">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-600/10 text-primary-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
						</div>
						<div>
							<div class="text-sm text-surface-500">Phone</div>
							<div class="font-medium text-surface-200">{site.contact.phone}</div>
						</div>
					</a>
					<div class="flex items-center gap-4">
						<div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-600/10 text-primary-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
						</div>
						<div>
							<div class="text-sm text-surface-500">Location</div>
							<div class="font-medium text-surface-200">{site.contact.location}</div>
						</div>
					</div>
				</div>

				<div class="mt-10 flex gap-4">
					{#each site.socials as social}
						<a
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={social.ariaLabel}
							class="flex h-11 w-11 items-center justify-center rounded-lg border border-surface-700 text-surface-400 transition-colors hover:border-primary-600/50 hover:text-primary-400"
						>
							{@render socialIcon(social.icon)}
						</a>
					{/each}
				</div>
			</div>

			<div>
				{#if submitted}
					<div class="flex h-full items-center justify-center rounded-2xl border border-surface-800 bg-surface-900/50 p-8">
						<div class="text-center">
							<div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
								<svg class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
							</div>
							<h3 class="mb-2 text-xl font-bold text-white">Message Sent!</h3>
							<p class="text-surface-400">Thanks for reaching out. I'll get back to you soon.</p>
							<button
								class="mt-6 text-sm font-medium text-primary-400 hover:text-primary-300"
								onclick={() => {
									submitted = false;
									formData = { name: '', email: '', subject: '', message: '' };
								}}
							>
								Send another message
							</button>
						</div>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-5 rounded-2xl border border-surface-800 bg-surface-900/50 p-8">
						<div class="grid gap-5 sm:grid-cols-2">
							<div>
								<label for="name" class="mb-1.5 block text-sm font-medium text-surface-300">Name</label>
								<input
									id="name"
									type="text"
									bind:value={formData.name}
									required
									class="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-3 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
									placeholder="Your name"
								/>
							</div>
							<div>
								<label for="email" class="mb-1.5 block text-sm font-medium text-surface-300">Email</label>
								<input
									id="email"
									type="email"
									bind:value={formData.email}
									required
									class="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-3 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
									placeholder="your@email.com"
								/>
							</div>
						</div>
						<div>
							<label for="subject" class="mb-1.5 block text-sm font-medium text-surface-300">Subject</label>
							<input
								id="subject"
								type="text"
								bind:value={formData.subject}
								required
								class="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-3 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
								placeholder="Project inquiry"
							/>
						</div>
						<div>
							<label for="message" class="mb-1.5 block text-sm font-medium text-surface-300">Message</label>
							<textarea
								id="message"
								bind:value={formData.message}
								required
								rows="5"
								class="w-full rounded-lg border border-surface-700 bg-surface-800/50 px-4 py-3 text-sm text-white placeholder-surface-500 outline-none transition-colors focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
								placeholder="Tell me about your project..."
							></textarea>
						</div>
						<button
							type="submit"
							class="w-full rounded-lg bg-primary-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
						>
							Send Message
						</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
