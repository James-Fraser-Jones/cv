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
            flex flex-col items-center
            border-solid border-l border-r border-black
            text-center
			w-dates
        "
	>
		<div>{to}</div>
		<div class="grow flex">
			<div class="grow border-solid border-r border-black" />
			<div class="grow" />
		</div>
		<IconLink {...locationlink} />
		<div class="grow flex">
			<div class="grow border-solid border-r border-black" />
			<div class="grow" />
		</div>
		<div>{from}</div>
	</span>
	<span class="grow pl-2 flex flex-col">
		<div class="font-semibold">{title}</div>
		<div class="tracking-tight">
			<slot />
		</div>
	</span>
</div>
