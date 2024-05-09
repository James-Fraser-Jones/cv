<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
</script>

<div class="bg-slate-100 p-14 flex justify-center">
	<div
		class="bg-slate-50 shadow-2xl w-a4 h-a4 p-16 flex flex-col gap-3 text-base leading-snug tracking-normal"
	>
		<Header {...content.Header} />
		<Skills {...content.Skills} />
		<Experience {...content.Experience} />
		<Education {...content.Education} />
		<Projects {...content.Projects} />
	</div>
</div>
