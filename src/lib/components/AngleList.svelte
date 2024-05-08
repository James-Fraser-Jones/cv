<script>
	import Icon from '$lib/components/Icon.svelte';
	export let details;
	export let count = 3;
</script>

<div class="flex flex-col gap-1">
	{#each details.slice(0, count) as detail}
		<div class="flex gap-2">
			<span class="text-xs mt-0.5"><Icon icon="faAngleRight" /></span>
			<p class="grow">{@html detail}</p>
		</div>
	{/each}
</div>
