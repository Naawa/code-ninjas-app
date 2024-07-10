<script>
	import { page } from '$app/stores';
</script>

<div class="side-bar-gradient simple-shadow">
	<a
		href="/student/dashboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/dashboard')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h4>Dashboard</h4>
		</span>
	</a>
	<a
		href="/student/attendance"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/attendance')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h4>Attendance</h4>
		</span>
	</a>
	<a
		href="/student/profile"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/profile')}
	>
		<span>
			<img src="/profile.png" alt="" />
			<h4>Students</h4>
		</span>
	</a>
	<a
		href="/student/shop"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/shop')}
	>
		<span>
			<img src="/shop.png" alt="" />
			<h4>Shop</h4>
		</span>
	</a>
	<a
		href="/student/leaderboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/leaderboard')}
	>
		<span>
			<img src="/leaderboard.png" alt="" />
			<h4>Leaderboard</h4>
		</span>
	</a>
	<a
		href="/student/settings"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/student/layout/settings')}
	>
		<span>
			<img src="/settings.png" alt="" />
			<h4>Settings</h4>
		</span>
	</a>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		min-width: fit-content;
		justify-content: center;
		gap: 2em;
		align-items: center;
		border-radius: 0 2em 0 0;

		a {
			display: flex;
			align-items: center;
			width: fit-content;
			height: fit-content;
			padding: 1em 2em;
			width: 100%;

			&:hover {
				border-radius: 0;
				background-color: #fffefe1b;
				text-align: right;
				backdrop-filter: blur(20px);
			}


			span {
				display: flex;
				align-items: center;
				width: 100%;
				gap: 1em;
				
				h4 {
					display: flex;
					align-items: center;
					color: white;
				}

				img {
					height: 1.75em;
					translate: 0 -0.15em;
				}
			}
		}
	}
	.active {
		width: 120%;
		background-color: #0db88f;
		box-shadow: -0.25em 0.25em 1em 0 #0000003a;
		border-radius: 0 1em 1em 0;
		text-align: right;

		span {
			translate: 3em;
		}

		&:hover {
			border-radius: 0 1em 1em 0;
			background-color: #0db88f;
		}
	}
</style>
