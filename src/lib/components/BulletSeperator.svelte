<script>
	export let list;
</script>

<div class="flex justify-between">
	<span>{list[0]}</span>
	{#each list.slice(1) as item}
		<span class="mx-2">•</span>
		<span>{item}</span>
	{/each}
</div>
