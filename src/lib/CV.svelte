<script>
	import content from './content.json';
	import Header from '$lib/sections/Header.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Icon from '$lib/components/Icon.svelte';
</script>

<div class="bg-slate-100 p-14 flex justify-center text-sm">
	<div class="size-a4 bg-slate-50 shadow-2xl p-14 flex flex-col gap-4">
		<Header info={content.header} />
		<SectionHeader icon={content.skills.icon} title={content.skills.title}>
			<Skills entries={content.skills.entries} />
		</SectionHeader>
		<SectionHeader icon={content.experience.icon} title={content.experience.title}>
			<Experience entries={content.experience.entries} />
		</SectionHeader>
		<SectionHeader icon={content.education.icon} title={content.education.title}>
			<Education entries={content.education.entries} />
		</SectionHeader>
		<!-- <SectionHeader icon={content.projects.icon} title={content.projects.title}>
			<Projects entries={content.projects.entries} />
		</SectionHeader> -->
	</div>
</div>

<style>
	.size-a4 {
		width: 210mm;
		height: 297mm;
	}
</style>
