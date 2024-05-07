<script>
	import ExperienceEntry from '$lib/components/ExperienceEntry.svelte';

	export let entries;
</script>

<div class="flex flex-col gap-2">
	{#each entries as entry}
		<ExperienceEntry {...entry} />
	{/each}
</div>
