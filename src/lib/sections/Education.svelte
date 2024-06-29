<script>
	import EducationTable from '$lib/components/EducationTable.svelte';
	import ParagraphList from '$lib/components/ParagraphList.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';

	export let header;
	export let entries;
</script>

<SectionHeader {...header}>
	<div class="flex justify-evenly">
		{#each [entries[0]] as { title, locationlink, from, to, details }}
			<EducationTable {title} {locationlink} {from} {to}>
				<ParagraphList {details} />
			</EducationTable>
		{/each}
		{#each entries.slice(1) as { title, locationlink, from, to, details }}
			<div class="border-solid border-black border-r"></div>
			<EducationTable {title} {locationlink} {from} {to}>
				<ParagraphList {details} />
			</EducationTable>
		{/each}
	</div>
</SectionHeader>
