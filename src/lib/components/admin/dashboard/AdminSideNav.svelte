<script>
	import { page } from '$app/stores';
</script>

<div class="side-bar-gradient simple-shadow">
	<a
		href="/admin/dashboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/dashboard')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h3>Dashboard</h3>
		</span>
	</a>
	<a
		href="/admin/manage-attendance"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-attendance')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h3>Attendance</h3>
		</span>
	</a>
	<a
		href="/admin/manage-students"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-students')}
	>
		<span>
			<img src="/profile.png" alt="" />
			<h3>Students</h3>
		</span>
	</a>
	<a
		href="/admin/manage-shop"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-shop')}
	>
		<span>
			<img src="/shop.png" alt="" />
			<h3>Shop</h3>
		</span>
	</a>
	<a
		href="/admin/leaderboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/leaderboard')}
	>
		<span>
			<img src="/leaderboard.png" alt="" />
			<h3>Leaderboard</h3>
		</span>
	</a>
	<a
		href="/admin/manage-account"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-account')}
	>
		<span>
			<img src="/settings.png" alt="" />
			<h3>Account</h3>
		</span>
	</a>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		min-width: fit-content;
		justify-content: center;
		gap: 3em;
		align-items: center;
		border-radius: 0 2em 0 0;

		a {
			display: flex;
			align-items: center;
			width: fit-content;
			height: fit-content;
			padding: 1em 2em;
			border-radius: 1em;
			width: 100%;

			&:hover {
				width: 120%;
				border-radius: 0 1em 1em 0;
				text-align: right;

				span {
					translate: 4em;
				}
			}


			span {
				display: flex;
				align-items: center;
				width: 100%;
				gap: 1em;
				
				h3 {
					color: white;
				}

				img {
					height: 2em;
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
			translate: 4em;
		}
	}
</style>
