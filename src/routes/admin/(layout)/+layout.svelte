<script lang="ts">
	import AdminNavigation from '$lib/components/dashboard/AdminNavigation.svelte';
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

<span>
	<div>
		<AdminNavigation></AdminNavigation>
	</div>
	<div>
		<slot />
	</div>
</span>

<style lang="scss">
	section {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 2em;
		height: 8em;
		
		img {
			height: 3em;
		}
	}

	span {
		display: flex;
		border: solid 3px red;
		width: 100%;
		height: calc(100vh - 8em);

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			border: solid 3px green;
			width: 100%;
			
			&:first-of-type {
				width: 10em;
				border: solid 3px blue;
				flex-direction: column;
			}
		}
	}
</style>