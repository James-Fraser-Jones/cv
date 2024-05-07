<script>
	import ProjectEntry from '$lib/components/ProjectEntry.svelte';

	export let entries;
</script>

<div class="flex flex-col gap-2">
	{#each entries as entry}
		<ProjectEntry {...entry} />
	{/each}
</div>
