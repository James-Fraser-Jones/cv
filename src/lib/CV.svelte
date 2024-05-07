<script>
	import content from './content.json';
	import Header from '$lib/layout/Header.svelte';
	import Section from '$lib/layout/Section.svelte';
</script>

<div class="bg-slate-100 p-14 flex justify-center text-sm">
	<div class="size-a4 bg-slate-50 shadow-2xl p-14 flex flex-col gap-4">
		<Header content={content.header} />
		{#each content.sections as section}
			<Section {...section} />
		{/each}
	</div>
</div>

<style>
	.size-a4 {
		width: 210mm;
		height: 297mm;
	}
</style>
