<script>
	export let details;
	export let count = 3;
</script>

<div class="flex flex-col">
	{#each details.slice(0, count) as detail}
		<p>{@html detail}</p>
	{/each}
</div>
