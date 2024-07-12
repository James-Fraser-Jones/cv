<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import { makePostRequest } from './utils';

	makePostRequest('(\\x -> x) T').then((response) => {
		console.log(response);
	});
</script>

<div
	class=" p-14 bg-light shadow-2xl
			shrink-0 flex flex-col gap-3
			w-a4 h-a4
			leading-tight tracking-normal text-dark
		"
>
	<Header {...content.Header} />
	<Skills {...content.Skills} />
	<Experience {...content.Experience} />
	<Education {...content.Education} />
	<Projects {...content.Projects} />
</div>
