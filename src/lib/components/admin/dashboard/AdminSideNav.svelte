<script>
	import { page } from '$app/stores';
</script>

<div class="rounded-glass-container">
	<a
		href="/admin/dashboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/dashboard')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h4>Dashboard</h4>
		</span>
	</a>
	<a
		href="/admin/manage-attendance"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-attendance')}
	>
		<span>
			<img src="/sessions.png" alt="" />
			<h4>Attendance</h4>
		</span>
	</a>
	<a
		href="/admin/manage-students"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-students')}
	>
		<span>
			<img src="/profile.png" alt="" />
			<h4>Students</h4>
		</span>
	</a>
	<a
		href="/admin/manage-shop"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-shop')}
	>
		<span>
			<img src="/shop.png" alt="" />
			<h4>Shop</h4>
		</span>
	</a>
	<a
		href="/admin/leaderboard"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/leaderboard')}
	>
		<span>
			<img src="/leaderboard.png" alt="" />
			<h4>Leaderboard</h4>
		</span>
	</a>
	<a
		href="/admin/manage-account"
		class="color-link"
		class:active={$page.url.pathname.startsWith('/admin/manage-account')}
	>
		<span>
			<img src="/settings.png" alt="" />
			<h4>Account</h4>
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
		border-radius: 0 1em 0 0;

		a {
			display: flex;
			align-items: center;
			width: fit-content;
			height: fit-content;
			padding: 1em 2em;
			width: 100%;

			&:hover {
				border-radius: 0;
				background-color: #00255349;
				text-align: right;
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
