<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
</script>

<div class="bg-slate-100 p-14 flex justify-center text-sm leading-tight text-justify">
	<div class="size-a4 bg-slate-50 shadow-2xl p-12 flex flex-col gap-3">
		{#each Object.entries(content) as [section, data]}
			<svelte:component this={eval(section)} {...data} />
		{/each}
	</div>
</div>

<style>
	.size-a4 {
		width: 210mm;
		height: 297mm;
	}
</style>
