<script>
	import Fa from 'svelte-fa';
	import {
		faSuitcase,
		faTasks,
		faMortarBoard,
		faLaptop,
		faMobilePhone,
		faEnvelope,
		faInfo,
		faMapMarker,
		faLink,
		faAngleRight,
		faGlobe
	} from '@fortawesome/free-solid-svg-icons';
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

	export let icon;
</script>

<Fa icon={eval(icon)} />
