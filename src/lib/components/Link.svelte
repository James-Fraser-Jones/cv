<script>
	export let text;
	export let url;
</script>

<a class={url ? 'text-link hover:underline' : ''} href={url ? url : null} target="_blank">
	{text}
</a>
