<script>
	import Icon from '$lib/components/Icon.svelte';

	export let icon;
	export let title;
</script>

<div class="flex flex-col">
	<div
		class="
			text-xl text-brand small-caps tracking-widest
			flex gap-3 items-center
			border-solid border-b border-black
			px-2
		"
	>
		<Icon {icon} /> <span>{title}</span>
	</div>
	<div class="px-2 pt-2 flex flex-col gap-2">
		<slot />
	</div>
</div>

<style>
	.small-caps {
		font-variant: small-caps;
	}
</style>
