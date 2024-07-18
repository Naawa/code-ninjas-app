<script lang="ts">
	import { browser } from '$app/environment';

	// Date
	let now = new Date();

	// Session
	let session: boolean;
	let saturdays = new Date();
	saturdays.setHours(10, 0, 0, 0);
	let weekdays = new Date();
	weekdays.setHours(15, 30, 0, 0);

	// Clock
	let hourHand: number;
	let minuteHand: number;
	let ampm: string;

	// Timer
	export let timeBlock: string;
	let minutesLeftInHour: number;
	let secondsLeftInMinute: number;
	let timer: NodeJS.Timeout | number;

	// Activation
	function updateTimer() {
		let endTime = new Date();
		if (
			now.getDay() == 6 &&
			now.getTime() >= saturdays.getTime() &&
			now.getTime() <= new Date().setHours(14, 0, 0, 0)
		) {
			session = true;
			if (now.getHours() == 10) {
				endTime.setHours(11, 0, 0, 0);
			} else if (now.getHours() == 11) {
				endTime.setHours(12, 0, 0, 0);
			} else if (now.getHours() == 12) {
				endTime.setHours(13, 0, 0, 0);
			} else if (now.getHours() == 13) {
				endTime.setHours(14, 0, 0, 0);
			}
		} else if (
			now.getDay() >= 0 &&
			now.getTime() >= weekdays.getTime() &&
			now.getTime() <= new Date().setHours(19, 30, 0, 0)
		) {
			session = true;
			if (
				(now.getHours() == 15 && now.getMinutes() >= 30) ||
				(now.getHours() == 16 && now.getMinutes() <= 30)
			) {
				endTime.setHours(16, 30, 0, 0);
			} else if (
				(now.getHours() == 16 && now.getMinutes() >= 30) ||
				(now.getHours() == 17 && now.getMinutes() <= 30)
			) {
				endTime.setHours(17, 30, 0, 0);
			} else if (
				(now.getHours() == 17 && now.getMinutes() >= 30) ||
				(now.getHours() == 18 && now.getMinutes() <= 30)
			) {
				endTime.setHours(18, 30, 0, 0);
			} else if (
				(now.getHours() == 18 && now.getMinutes() >= 30) ||
				(now.getHours() == 19 && now.getMinutes() <= 30)
			) {
				endTime.setHours(19, 30, 0, 0);
			}
		} else {
			session = false;
			timeBlock = 'See you next time!';
		}
		now = new Date();
		minutesLeftInHour = new Date(endTime.getTime() - now.getTime()).getMinutes();
		secondsLeftInMinute = new Date(endTime.getTime() - now.getTime()).getSeconds();
		hourHand = now.getHours();
		minuteHand = now.getMinutes();
		if (hourHand > 12) {
			hourHand -= 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}
	}

	// Update Time
	$: if (browser) {
		timer = setInterval(updateTimer, 1000);
	}

	// Update Session
	$: if (session) {
		if (minutesLeftInHour <= 59 && minutesLeftInHour >= 50 && secondsLeftInMinute <= 59) {
			timeBlock = 'Typing!';
		} else if (minutesLeftInHour <= 50 && minutesLeftInHour >= 10) {
			timeBlock = 'Ninja Training!';
		} else if (minutesLeftInHour <= 10 && minutesLeftInHour >= 1 && secondsLeftInMinute <= 59) {
			timeBlock = 'Ninja Exploration!';
		} else if (minutesLeftInHour <= 1 && secondsLeftInMinute <= 59) {
			timeBlock = 'Home Time!';
		}
	}
	console.log(now.toLocaleTimeString());
</script>

<div class="rounded-glass-container">
	{#if timeBlock}
		<h3>{timeBlock}</h3>
	{/if}
	{#if session}
		<div>
			<span>
				<span>
					{#if minutesLeftInHour || minutesLeftInHour == 0}
						<h2>{minutesLeftInHour}</h2>
					{/if}
					<h3>Min</h3>
				</span>
				{#if secondsLeftInMinute || secondsLeftInMinute == 0}
					<h2>{secondsLeftInMinute}</h2>
				{/if}
				<h3>Sec</h3>
			</span>
		</div>
	{/if}
	<div>
		<span>
			<span>
				{#if hourHand}
					<h3>{hourHand}</h3>
					<h3>:</h3>
				{/if}
				{#if minuteHand != undefined}
					<h3>{minuteHand}</h3>
				{:else if minuteHand == 0}
					<h3>00</h3>
				{:else if minuteHand < 10}
					<h3>0{minuteHand}</h3>
				{/if}
			</span>
			{#if ampm}
				<h4>{ampm}</h4>
			{/if}
		</span>
	</div>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		width: fit-content;
		height: fit-content;
		justify-content: center;
		align-items: center;
		border-radius: 2em;
		padding: 2em;
		gap: 2em;

		div {
			padding: 0;
		}

		span {
			display: flex;
			justify-content: center;
			align-items: baseline;
			gap: 0.5em;

			span {
				gap: 0.25em;
			}
		}
	}
</style>
