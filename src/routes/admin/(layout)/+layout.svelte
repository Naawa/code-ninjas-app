<script lang="ts">
	import '$lib/styles/global.scss';
	import SignOut from '$lib/components/admin/dashboard/SignOut.svelte';
	import AdminSideNav from '$lib/components/admin/dashboard/AdminSideNav.svelte';
</script>

<header>
	<a href="/"><img src="../logo-side.png" alt="" /></a>
	<SignOut></SignOut>
</header>

<span>
	<AdminSideNav></AdminSideNav>
	<slot />
</span>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		height: 8em;
		gap: 2em;
		padding: 2em 4em;

		img {
			height: 3em;
		}
	}

	span {
		display: flex;
		width: 100%;
		height: calc(100vh - 8em);
	}
</style>
