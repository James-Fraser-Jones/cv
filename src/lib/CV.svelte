<script>
	import content from './content.json';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import BulletList from '$lib/components/BulletList.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Project from '$lib/sections/Project.svelte';
	import IconLink from '$lib/components/IconLink.svelte';
</script>

<div class="bg-slate-100 p-14 flex justify-center text-sm leading-tight">
	<div class="size-a4 bg-slate-50 shadow-2xl p-12 flex flex-col gap-3">
		<div class="flex items-center">
			<div class="grow flex flex-col">
				<h1 class="text-2xl">{content.header.name}</h1>
				<h2 class="text-xl text-brand">{content.header.title}</h2>
				<h3 class="text-base text-brand -mt-1">{content.header.location}</h3>
			</div>
			<div class="flex flex-col gap-1">
				{#each content.header.links as link}
					<IconLink {...link} />
				{/each}
			</div>
		</div>
		<SectionHeader icon={content.skills.icon} title={content.skills.title}>
			<BulletList entries={content.skills.entries} />
		</SectionHeader>
		<SectionHeader icon={content.experience.icon} title={content.experience.title}>
			{#each content.experience.entries as entry}
				<Experience {...entry} />
			{/each}
		</SectionHeader>
		<SectionHeader icon={content.education.icon} title={content.education.title}>
			{#each content.education.entries as entry}
				<Education {...entry} />
			{/each}
		</SectionHeader>
		<SectionHeader icon={content.projects.icon} title={content.projects.title}>
			{#each content.projects.entries as entry}
				<Project {...entry} />
			{/each}
		</SectionHeader>
	</div>
</div>

<style>
	.size-a4 {
		width: 210mm;
		height: 297mm;
	}
</style>
