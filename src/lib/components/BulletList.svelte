<script>
	export let entries;
</script>

<div class="flex justify-between font-semibold">
	<span>{entries[0]}</span>
	{#each entries.slice(1) as entry}
		<span>•</span>
		<span>{entry}</span>
	{/each}
</div>
