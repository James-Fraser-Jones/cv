<script>
	import IconLink from '$lib/components/IconLink.svelte';
	import BulletList from '$lib/components/BulletList.svelte';

	export let title;
	export let details;
	export let technologies;
	export let repository;
</script>

<div class="flex flex-col">
	<div class="text-base font-semibold">
		<IconLink {...title} />
	</div>
	<div class="grow flex flex-col">
		{#each details as detail}
			<div>{detail}</div>
		{/each}
	</div>
	<div class="flex gap-3">
		<BulletList entries={technologies} />
		<IconLink {...repository} />
	</div>
</div>
