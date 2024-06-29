<script>
	import Icon from '$lib/components/Icon.svelte';

	export let icon;
	export let text;
	export let url;
</script>

<a
	class="
		flex gap-2 items-center
		{url ? 'text-link visited:text-linkvisited hover:underline' : ''}
	"
	href={url ? url : null}
	target="_blank"
>
	<Icon {icon} />
	<span class="shrink-0">
		{text}
	</span>
</a>
