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
</style>
