<script lang="ts">
	import SignOut from '$lib/components/dashboard/SignOut.svelte';
	import '$lib/styles/global.scss'
	import { scale } from 'svelte/transition';
	export let data;
</script>

<section>
	<a href="/"><img src="/logo-side.png" alt="logo"></a>
	<h2 in:scale|global={{ delay: 400 }} out:scale|global={{ duration: 100}}>Welcome admin {data.admin.name}</h2>
	<SignOut></SignOut>
</section>
<slot />

<style lang="scss">
<<<<<<< HEAD
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 2em;
		height: 8em;
=======

	body, html {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	h1{ 
		text-align: center;
		margin-top: 20%;
	}

	#container {
		display: grid;
		grid-template-rows: auto 1fr;
		grid-template-columns: 200px 1fr;
		height: 100vh;
		overflow-y: hidden;

		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding:  1.5em 4em;
			grid-column: 1 / -1;
			position: sticky;
			// top: 0;
			z-index: 1000;
			
			img {
				max-height: 4em;
			}
		}

		.sidebar {
			// padding: 10px;
			position: sticky;
			list-style: none;
			top: 50px; /* Adjust based on the header height */
			// height: calc(100vh - 50px); /* Adjust based on the header height */
			// overflow-y: hidden;
			width: 50%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 3em;
			border-top-right-radius: 20px;
			border-bottom-right-radius: 20px;
			

			img{
				width: 90px;
			}

			li {
				z-index: 2;
			}

			li:active {
				// margin-left: 450px;
				border-radius: 50%;
				background-color: green;
				box-shadow: -25px 0px 20px -20px rgba(8, 7, 7, 0.45);
				padding: 10px;
				transform: translateX(50px);
				z-index: 3;
			}
>>>>>>> c4b0bfcf57fda1165c61818d0925663b042afe5f
		
		img {
			height: 3em;
		}
	}
</style>
