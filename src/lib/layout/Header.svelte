<script>
	import IconLink from '$lib/components/IconLink.svelte';

	export let content;
</script>

<div class="flex">
	<div class="grow">
		<h1 class="text-3xl">{content.name}</h1>
		<h2 class="text-xl text-brand">{content.title}</h2>
		<h3 class="text-lg text-brand">{content.location}</h3>
	</div>
	<div class="flex flex-col">
		{#each content.links as link}
			<IconLink {...link} />
		{/each}
	</div>
</div>
