<script>
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import BulletSeperator from '$lib/components/BulletSeperator.svelte';

	export let header;
	export let list;
</script>

<SectionHeader {...header}>
	<BulletSeperator {list} />
</SectionHeader>
