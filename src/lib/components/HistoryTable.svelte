<script>
	import Link from '$lib/components/Link.svelte';
	import DateRangePadder from '$lib/components/DateRangePadder.svelte';

	export let title;
	export let locationlink;
	export let from;
	export let to;
</script>

<div class="flex">
	<span
		class="
			shrink-0 flex flex-col items-center
            pr-2
            border-solid border-black border-r
            text-center
			w-dates
        "
	>
		<div>{to}</div>
		<DateRangePadder />
		<div class="tracking-tighter"><Link {...locationlink} /></div>
		<DateRangePadder />
		<div>{from}</div>
	</span>
	<span
		class="
		grow flex flex-col
		pl-2
		"
	>
		<div class="font-semibold">
			{title}
		</div>
		<div>
			<slot />
		</div>
	</span>
</div>
