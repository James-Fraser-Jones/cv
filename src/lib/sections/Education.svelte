<script>
	import IconLink from '$lib/components/IconLink.svelte';

	export let title;
	export let location;
	export let from;
	export let to;
	export let details;
	export let count = 3;
</script>

<div class="flex">
	<div
		class="
            flex flex-col justify-between shrink-0
            text-right
            pr-2 border-solid border-r border-black
			w-first-column
        "
	>
		<div>{to}</div>
		<div>{from}</div>
	</div>
	<div class="grow flex flex-col pl-2">
		<div class="font-semibold">{title}</div>
		{#each details.slice(0, count) as detail}
			<div class="flex">
				<div class="grow text-justify tracking-tight">{detail}</div>
			</div>
		{/each}
	</div>
	<div class="shrink-0 pl-3 w-last-column">
		<IconLink {...location} />
	</div>
</div>
