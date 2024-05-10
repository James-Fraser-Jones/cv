<script>
	export let details;
</script>

<div class="flex flex-col">
	{#each details as detail}
		<p>{@html detail}</p>
	{/each}
</div>
