<script>
	import IconLink from '$lib/components/IconLink.svelte';

	export let title;
	export let locationlink;
	export let from;
	export let to;
</script>

<div class="flex">
	<span
		class="
            shrink-0 pr-2
            flex flex-col justify-between
            border-solid border-r border-black
            text-right
        "
	>
		<div>{to}</div>
		<div>{from}</div>
	</span>
	<span class="grow pl-2 flex flex-col">
		<div class="font-semibold">{title}</div>
		<div class="tracking-tight">
			<slot />
		</div>
	</span>
	<span class="shrink-0 pl-2">
		<IconLink {...locationlink} />
	</span>
</div>
