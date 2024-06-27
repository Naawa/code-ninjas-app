<script>
	import About from '$lib/components/landing/About.svelte';
	import Create from '$lib/components/landing/Create.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import Slideshow from '$lib/components/landing/Slideshow.svelte';
	import TopBar from '$lib/components/landing/TopBar.svelte';
	export let data;
</script>

<TopBar {data}></TopBar>
<section>
	<Slideshow></Slideshow>
	<About></About>
	<Create></Create>
</section>
<Footer></Footer>

