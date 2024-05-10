<script>
	import IconLink from '$lib/components/IconLink.svelte';

	export let name;
	export let title;
	export let location;
	export let links;
</script>

<div class="flex">
	<span class="grow flex flex-col">
		<h1 class="text-3xl">
			{name}
		</h1>
		<h2 class="text-2xl text-brand">
			{title}
		</h2>
		<h3 class="text-lg text-brand -mt-1">
			{location}
		</h3>
	</span>
	<span class="flex flex-col gap-1">
		{#each links as link}
			<IconLink {...link} />
		{/each}
	</span>
</div>
