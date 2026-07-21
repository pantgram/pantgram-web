<script lang="ts">
	import { site } from '$lib/data';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-rule px-6 py-8">
	<div class="mx-auto flex max-w-2xl flex-col gap-1 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
		<p>&copy; {currentYear} {site.brandName}</p>
		<p>{site.contact.location}</p>
	</div>
</footer>
