<script>
	import Fa from 'svelte-fa'
  	import { faFlag } from '@fortawesome/free-solid-svg-icons'
	let name = 'world';
</script>

<h1 class="text-3xl font-bold underline">Hello {name}!</h1>

<Fa icon={faFlag}/>Flag
