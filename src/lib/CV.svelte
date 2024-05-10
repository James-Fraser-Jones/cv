<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import ThemeButton from './components/ThemeButton.svelte';
</script>

<div class="flex justify-center p-14 bg-slate-200 overflow-hidden min-h-screen">
	<div
		class="
			flex flex-col gap-3 p-14 bg-slate-50 shadow-2xl
			w-a4 h-a4
			leading-tight tracking-normal
			relative
		"
	>
		<Header {...content.Header} />
		<Skills {...content.Skills} />
		<Experience {...content.Experience} />
		<Education {...content.Education} />
		<Projects {...content.Projects} />
		<div class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
			<ThemeButton />
		</div>
	</div>
</div>
<div
	class="
		fixed top-0 left-0 right-0 bottom-0
		pointer-events-none
		backdrop-invert backdrop-hue-rotate-180
	"
/>
