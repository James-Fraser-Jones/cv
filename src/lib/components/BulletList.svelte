<script>
	export let content;
</script>

<div class="flex justify-between font-medium">
	<span>{content[0]}</span>
	{#each content.slice(1) as chunk}
		<span>•</span>
		<span>{chunk}</span>
	{/each}
</div>
