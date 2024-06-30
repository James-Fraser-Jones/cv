<script>
	import Link from '$lib/components/Link.svelte';

	export let title;
	export let locationlink;
	export let from;
	export let to;
</script>

<div class="flex gap-3">
	<span
		class="
			shrink-0 flex flex-col items-center justify-evenly
            text-center
        "
	>
		<Link {...locationlink} />
		<div>
			<span>{from}</span>
			<span>-</span>
			<span>{to}</span>
		</div>
	</span>
	<span class="grow flex flex-col">
		<div class="font-semibold">
			{title}
		</div>
		<div>
			<slot />
		</div>
	</span>
</div>
