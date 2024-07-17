<script lang="ts">
	// Date
	let today = new Date();

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
	let timerMessage: string;
	let minutesLeftInHour: number;
	let secondsLeftInMinute: number;
	let timer: NodeJS.Timeout | number;

	// Activation
	$: if (
		today.getDay() == 6 &&
		today.getTime() >= saturdays.getTime() &&
		today.getTime() <= new Date(saturdays).setHours(14, 0, 0, 0)
	) {
		session = true;
		let endTime = new Date();
		if (today.getHours() == 10) {
			endTime.setHours(11, 0, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 11) {
			endTime.setHours(12, 0, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 12) {
			endTime.setHours(13, 0, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 13) {
			endTime.setHours(14, 0, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		}
	} else if (
		today.getDay() >= 0 &&
		today.getTime() >= saturdays.getTime() &&
		today.getTime() <= new Date(weekdays).setHours(19, 30, 0, 0)
	) {
		session = true;
		let endTime = new Date();
		if (today.getHours() == 10) {
			endTime.setHours(15, 30, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 11) {
			endTime.setHours(16, 30, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 12) {
			endTime.setHours(17, 30, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		} else if (today.getHours() == 13) {
			endTime.setHours(18, 30, 0, 0);
			minutesLeftInHour = endTime.getMinutes() - today.getMinutes();
			secondsLeftInMinute = endTime.getSeconds() - today.getSeconds();
		}
	} else {
		session = false;
		timerMessage = 'See you next time!';
	}

	// Update Time
	$: {
		clearInterval(timer);
		timer = setInterval(() => {
			today = new Date();
			hourHand = today.getHours();
			minuteHand = today.getMinutes();
			if (hourHand > 12) {
				hourHand -= 12;
				ampm = 'PM';
			} else {
				ampm = 'AM';
			}
		}, 1000);
	}

	// Update Session
	$: if (session) {
		if (minutesLeftInHour <= 59 && minutesLeftInHour >= 50 && secondsLeftInMinute <= 59) {
			timerMessage = 'Typing!';
		}
		if (minutesLeftInHour <= 50 && minutesLeftInHour >= 10 && secondsLeftInMinute <= 59) {
			timerMessage = 'Ninja Training!';
		} else if (minutesLeftInHour <= 10 && minutesLeftInHour >= 1 && secondsLeftInMinute <= 59) {
			timerMessage = 'Ninja Exploration!';
		} else if (minutesLeftInHour <= 1 && secondsLeftInMinute <= 59) {
			timerMessage = 'Home Time!';
		}
	}
</script>

<div class="rounded-glass-container">
	{#if timerMessage}
		<h3>{timerMessage}</h3>
	{/if}
	{#if session}
		<div>
			<span>
				{#if minutesLeftInHour}
					<h2>{minutesLeftInHour}</h2>
				{/if}
				{#if secondsLeftInMinute}
					<h2>{minutesLeftInHour}</h2>
				{/if}
			</span>
		</div>
	{/if}
	<div>
		<span>
			<span>
				{#if hourHand}
					<h3>{hourHand}</h3>
				{/if}
                <h3>:</h3>
				{#if minuteHand}
					<h3>{minuteHand}</h3>
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
