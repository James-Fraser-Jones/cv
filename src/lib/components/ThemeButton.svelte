<script>
	import Icon from './Icon.svelte';
	let light = true;
	function toggleTheme() {
		light = !light;
	}
</script>

<button
	class="
		theme-button {light ? 'light' : ''}
		p-4 rounded-full
		backdrop-invert backdrop-hue-rotate-180
		"
	on:click={toggleTheme}
>
	<div class="text-xl text-link invert hue-rotate-180">
		<Icon icon={light ? 'faMoon' : 'faSun'} />
	</div>
</button>

<style>
	.theme-button {
		transition: padding 0.75s ease-in-out;
	}
	.light {
		padding: 2500px;
	}
</style>
