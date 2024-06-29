<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
</script>

<div class="flex justify-center p-14 bg-slate-200 overflow-hidden min-h-screen">
	<div
		class="
			flex flex-col gap-3 p-14 bg-slate-50 shadow-2xl
			w-a4 h-a4
			leading-tight tracking-normal
		"
	>
		<Header {...content.Header} />
		<Skills {...content.Skills} />
		<Experience {...content.Experience} />
		<Education {...content.Education} />
		<Projects {...content.Projects} />
	</div>
</div>
