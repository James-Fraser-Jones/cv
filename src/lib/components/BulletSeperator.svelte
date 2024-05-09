<script>
	export let list;
</script>

<div class="flex justify-between flex-wrap font-semibold">
	<span class="shrink-0">{list[0]}</span>
	{#each list.slice(1) as item}
		<span class="shrink-0 mx-2">•</span>
		<span class="shrink-0">{item}</span>
	{/each}
</div>
