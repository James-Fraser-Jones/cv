<script>
	import Skills from '$lib/sections/Skills.svelte';
	import Experience from '$lib/sections/Experience.svelte';
	import Education from '$lib/sections/Education.svelte';
	import Projects from '$lib/sections/Projects.svelte';
	import Icon from '$lib/components/Icon.svelte';

	export let icon;
	export let title;
	export let content;
</script>

<div>
	<div
		class="
			text-xl text-brand small-caps tracking-widest
			flex gap-3 items-center
			border-solid border-b border-black
			px-1
		"
	>
		<Icon {icon} /> <span>{title}</span>
	</div>
	<div class="px-1 pt-1">
		{#if title === 'Skills'}
			<Skills {content} />
		{:else if title === 'Experience'}
			<Experience {content} />
		{:else if title === 'Education'}
			<Education {content} />
		{:else if title === 'Projects'}
			<Projects {content} />
		{/if}
	</div>
</div>

<style>
	.small-caps {
		font-variant: small-caps;
	}
</style>
