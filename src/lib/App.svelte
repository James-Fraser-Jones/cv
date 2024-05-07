<script>
	import Fa from 'svelte-fa'
  	import { faSuitcase, faTasks, faMortarBoard, faLaptop, faMobilePhone, faEnvelope, faInfo, faMapMarker, faLink, faAngleRight, faGlobe } from '@fortawesome/free-solid-svg-icons'
	import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
	let name = 'James Fraser-Jones';
</script>

<h1 class="text-brand">Hello {name}!</h1>

<Fa icon={faSuitcase}/>
<Fa icon={faTasks}/>
<Fa icon={faMortarBoard}/>
<Fa icon={faLaptop}/>
<Fa icon={faMobilePhone}/>
<Fa icon={faEnvelope}/>
<Fa icon={faInfo}/>
<Fa icon={faMapMarker}/>
<Fa icon={faLink}/>
<Fa icon={faAngleRight}/>
<Fa icon={faGlobe}/>
<Fa icon={faLinkedin}/>
<Fa icon={faGithub}/>
