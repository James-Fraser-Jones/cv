<script>
	import EducationEntry from '$lib/components/EducationEntry.svelte';

	export let entries;
</script>

<div class="flex flex-col gap-2">
	{#each entries as entry}
		<EducationEntry {...entry} />
	{/each}
</div>
