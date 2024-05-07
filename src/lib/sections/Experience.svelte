<script>
	import Entry from '$lib/components/Entry.svelte';

	export let entries;
</script>

<div class="flex flex-col gap-3">
	{#each entries as entry}
		<Entry {...entry} />
	{/each}
</div>
