<script lang="ts">
	import '$lib/styles/global.scss';
	import SignOut from '$lib/components/dashboard/SignOut.svelte';

	let activeLink: string;

	function setActive(link: string) {
		activeLink = link;
	}
</script>

<header>
	<a href="/"><img src="../logo-side.png" alt="" /></a>
	<SignOut></SignOut>
</header>

<span>
	<div class="side-bar-gradient box-shadow-right">
		<a
			href="/admin/manage-account"
			class="color-link"
			class:active={activeLink === 'link1'}
			on:click={() => setActive('link1')}
		>
			<img src="../settings.png" alt="" />
		</a>
		<a
			href="/admin/manage-attendance"
			class="color-link"
			class:active={activeLink === 'link2'}
			on:click={() => setActive('link2')}
		>
			<img src="../sessions.png" alt="" />
		</a>
		<a
			href="/admin/manage-clock"
			class="color-link"
			class:active={activeLink === 'link3'}
			on:click={() => setActive('link3')}
		>
			<img src="../leaderboard.png" alt="" />
		</a>
		<a
			href="/admin/manage-students"
			class="color-link"
			class:active={activeLink === 'link4'}
			on:click={() => setActive('link4')}
		>
			<img src="../profile.png" alt="" />
		</a>
		<a
			href="/admin/manage-shop"
			class="color-link"
			class:active={activeLink === 'link5'}
			on:click={() => setActive('link5')}
		>
			<img src="../shop.png" alt="" />
		</a>
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
		padding: 2em 4em;

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
			border-top-right-radius: 40px;
			border-bottom-right-radius: 40px;
			margin-right: 5em;

			&:first-of-type {
				width: 8em;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 2em;

				a {
					padding: 1em 1.5em;
					// background-color: aqua;
					border-radius: 50%;
					// padding-bottom: 0em;

					img {
						width: 4.5em;
						margin: 0em;
					}
				}

				// .color-link {
				// 	display: inline-block;
				// 	margin: 5px;
				// 	padding: 10px;
				// 	border: 2px solid transparent;
				// 	border-radius: 5px;
				// 	transition: all 0.3s;
				// }

				.active {
					background-color: #0db88f;
					translate: 3em;
					box-shadow: -10px 0px 7px 0px #252525;
				}

				// a:active {
				// 	background-color: green;
				// 	border-radius: 50%;
				// 	box-shadow: -25px 0px 20px -20px rgba(0,0,0,0.45);
				// 	margin-left: 120px;
				// }
			}
		}
	}

	@media screen and (max-height: 750px) {
		span {
			div {
				a {
					img {
						width: 1em;
					}
				}
			}
		}
	}
</style>
