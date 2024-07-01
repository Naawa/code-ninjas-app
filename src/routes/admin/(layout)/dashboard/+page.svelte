<div id="Leaderboard-section">
	<h1 class="white text-shadow">Welcome Back, Sensei</h1>

	<div class="notif">
		<h3 class="bold-9 text-center">Notifications</h3>
		<li class="bold-9"><img src="/party.png" alt="icon of birthday hat" />Upcoming Birthdays</li>
		<li class="bold-9"><img src="/attention.png" alt="icon of an exclamation mark" /> Quests</li>
		<li class="bold-9"><img src="/attention.png" alt="icon of a star" /> Adventures</li>
		<li class="bold-9"><img src="/attention.png" alt="icon of a star" /> Game Submissions</li>
	</div>
</div>

<style lang="scss">
	#Leaderboard-section {
		width: 100%;
		padding: 50px;

		.notif {
			background-color: #fff;
			float: right;
			padding: 2em;
			border-radius: 2em;
			width: 25%;
			height: 75%;

			h3 {
				margin-bottom: 1em;
				text-decoration-line: underline;
				color: rgb(241, 31, 31);
			}

			li {
				display: flex;
				list-style: none;
				justify-content: flex-start;
				align-items: center;
			}
		}
	}
</style>
