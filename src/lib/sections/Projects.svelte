<script>
	import IconLink from '$lib/components/IconLink.svelte';
	import BulletSeperator from '$lib/components/BulletSeperator.svelte';
	import ParagraphList from '$lib/components/ParagraphList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let header;
	export let entries;
</script>

<SectionHeader {...header}>
	{#each entries as { titlelink, details, techlist, repolink }}
		<div class="flex flex-col gap-1">
			<div class="text-base font-semibold">
				<IconLink {...titlelink} />
			</div>
			<div class="grow tracking-tight">
				<ParagraphList {details} />
			</div>
			<div class="flex gap-3">
				<BulletSeperator list={techlist} />
				<IconLink {...repolink} />
			</div>
		</div>
	{/each}
</SectionHeader>
