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

<Fa
	icon={icon === 'faSuitcase'
		? faSuitcase
		: icon === 'faTasks'
			? faTasks
			: icon === 'faMortarBoard'
				? faMortarBoard
				: icon === 'faLaptop'
					? faLaptop
					: icon === 'faMobilePhone'
						? faMobilePhone
						: icon === 'faEnvelope'
							? faEnvelope
							: icon === 'faInfo'
								? faInfo
								: icon === 'faMapMarker'
									? faMapMarker
									: icon === 'faLink'
										? faLink
										: icon === 'faAngleRight'
											? faAngleRight
											: icon === 'faGlobe'
												? faGlobe
												: icon === 'faLinkedin'
													? faLinkedin
													: icon === 'faGithub'
														? faGithub
														: faGithub}
/>
