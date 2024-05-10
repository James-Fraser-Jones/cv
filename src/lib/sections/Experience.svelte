<script>
	import HistoryTable from '$lib/components/HistoryTable.svelte';
	import AngleList from '$lib/components/AngleList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let header;
	export let entries;
</script>

<SectionHeader {...header}>
	<div class="flex flex-col gap-3">
		{#each entries as { title, locationlink, from, to, details }}
			<HistoryTable {title} {locationlink} {from} {to}>
				<div class="pt-1 pl-2">
					<AngleList {details} />
				</div>
			</HistoryTable>
		{/each}
	</div>
</SectionHeader>
