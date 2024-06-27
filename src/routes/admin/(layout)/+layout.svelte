<script lang="ts">
	import '$lib/styles/global.scss'
	import SignOut from "$lib/components/dashboard/SignOut.svelte";
</script>

<header>
	<a href="/"><img src="../logo-side.png" alt=""></a>
	<SignOut></SignOut>
</header>

<span>
	<div>
		<a href="/admin/manage-account"><img src="../settings.png" alt=""></a>
        <a href="/admin/manage-attendance"><img src="../sessions.png" alt=""></a>
        <a href="/admin/manage-leaderboards"><img src="../leaderboard.png" alt=""></a>
        <a href="/admin/manage-students"><img src="../profile.png" alt=""></a>
        <a href="/admin/manage-shop"><img src="../shop.png" alt=""></a>
	</div>
	<div>
		<slot />
	</div>
</span>



<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
		height: 8em;
		gap: 2em;
		padding: 2em;

		img {
			height: 3em;
		}
	}

	span {
		display: flex;
		width: 100%;
		height: calc(100vh - 8em);

		div {
			width: 100%;
			display: flex;

			&:first-of-type {
				width: 10em;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 2em;

				a {
					img {
						height: 6em;
					}
				}
			}
		}
	}
</style>