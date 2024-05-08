<script>
	import HistoryTable from '$lib/components/HistoryTable.svelte';
	import AngleList from '$lib/components/AngleList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let header;
	export let entries;
</script>

<SectionHeader {...header}>
	{#each entries as { title, locationlink, from, to, details }}
		<HistoryTable {title} {locationlink} {from} {to}>
			<div class="pl-2 pt-1">
				<AngleList {details} />
			</div>
		</HistoryTable>
	{/each}
</SectionHeader>
