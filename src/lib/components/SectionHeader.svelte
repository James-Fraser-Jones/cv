<script>
	import Icon from '$lib/components/Icon.svelte';

	export let icon;
	export let title;
</script>

<div>
	<div
		class="
			text-xl text-brand small-caps tracking-widest
			flex gap-3 items-center
			border-solid border-b border-black
			px-1
		"
	>
		<Icon {icon} /> <span>{title}</span>
	</div>
	<div class="px-1 pt-1">
		<slot />
	</div>
</div>

<style>
	.small-caps {
		font-variant: small-caps;
	}
</style>
