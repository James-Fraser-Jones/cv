<script>
	import HistoryTable from '$lib/components/HistoryTable.svelte';
	import ParagraphList from '$lib/components/ParagraphList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let header;
	export let entries;
</script>

<SectionHeader {...header}>
	<div class="flex justify-between">
		{#each entries as { title, locationlink, from, to, details }}
			<HistoryTable {title} {locationlink} {from} {to}>
				<ParagraphList {details} />
			</HistoryTable>
		{/each}
	</div>
</SectionHeader>
