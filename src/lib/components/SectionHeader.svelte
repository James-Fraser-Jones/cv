<script>
	import Icon from '$lib/components/Icon.svelte';

	export let icon;
	export let title;
</script>

<div class="flex flex-col">
	<div
		class="
			flex gap-3 items-center px-2
			text-xl text-brand small-caps tracking-widest
			border-solid border-black border-b
		"
	>
		<Icon {icon} /> <span>{title}</span>
	</div>
	<div class="px-2 pt-2">
		<slot />
	</div>
</div>
