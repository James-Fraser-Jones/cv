<script>
	import IconLink from '$lib/components/IconLink.svelte';

	export let info;
</script>

<div class="flex">
	<div class="grow">
		<h1 class="text-3xl">{info.name}</h1>
		<h2 class="text-xl text-brand">{info.title}</h2>
		<h3 class="text-lg text-brand">{info.location}</h3>
	</div>
	<div class="flex flex-col">
		{#each info.links as link}
			<IconLink {...link} />
		{/each}
	</div>
</div>
