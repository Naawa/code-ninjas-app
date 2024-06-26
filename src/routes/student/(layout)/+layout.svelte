<script lang="ts">
	import SignOut from '$lib/components/dashboard/SignOut.svelte';
	import '$lib/styles/global.scss'
	export let data;
</script>

<section>
	<a href="/"><img src="/logo-side.png" alt="logo"></a>
	<h2>Welcome student {data.student.name}</h2>
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