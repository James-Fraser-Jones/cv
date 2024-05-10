<script>
	import Icon from '$lib/components/Icon.svelte';
	export let details;
</script>

<div class="flex flex-col gap-1">
	{#each details as detail}
		<div class="flex gap-2">
			<span class="flex items-center h-5.5-em text-sm">
				<Icon icon="faAngleRight" />
			</span>
			<p class="grow">
				{@html detail}
			</p>
		</div>
	{/each}
</div>
