<script lang="ts">
	import '$lib/styles/global.scss'
	export let data;
	import SignOut from "$lib/components/dashboard/SignOut.svelte";

	
</script>

<div id="container">

	<!-- header -->
	<header class="header box-shadow header-gradient">
		<div class="nav-logo">
			<img src="../logo-side.png" alt="">
		</div>
		<SignOut></SignOut></header>

	<!-- sidebar -->
	<aside class="sidebar box-shadow-right side-bar-gradient">
		<li><a href=""><img src="../settings.png" alt=""></a></li>
        <li><a href=""><img src="../sessions.png" alt=""></a></li>
        <li><a href=""><img src="../leaderboard.png" alt=""></a></li>
        <li><a href=""><img src="../profile.png" alt=""></a></li>
        <li><a href=""><img src="../shop.png" alt=""></a></li>
	</aside>
		
	<!-- content -->
	<main class="content">
		<h1 class= "white text-shadow">Welcome admin {data.admin.name}</h1>
		<!-- <img src="../logo-side.png" alt="">
		<img src="../logo-side.png" alt="">
		<img src="../logo-side.png" alt="">
		<img src="../logo-side.png" alt=""> -->
	</main>

</div>

<style lang="scss">

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
		
		}

		.content {
			// background-color: #fff;
			padding: 10px;
			overflow-y: auto;
		}

	}

	@media only screen and (max-width: 1600px) { 

		#container .sidebar{
			// visibility: hidden;
			// margin-bottom: 50px;
			gap:0.8em;
		}
	}

</style>