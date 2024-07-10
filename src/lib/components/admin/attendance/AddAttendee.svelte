<script lang="ts">
	export let data;
	import { blur, scale } from 'svelte/transition';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	const {
		form: addAttendeeForm,
		enhance: addAttendeeEnhance,
		errors: addAttendeeErrors,
		message: addAttendeeMessage,
		constraints: addAttendeeConstraints
	} = superForm(data.addAttendeeForm);

	let showModal = false;
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="primary-btn bold-9">Add Attendee</button
>

{#if showModal}
	<span>
		<div transition:blur class="rounded-glass-container">
			<button
				class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="/close-login.png" alt="" />
			</button>

			<h3>Add Attendee</h3>
			<form method="post" use:addAttendeeEnhance>
				<input type="text" placeholder="Scan Wristband" name="studentNumber" bind:value={$addAttendeeForm.studentNumber}>
				<div>
					<button
						class="primary-btn bold-9"
						type="submit"
						formaction="/admin/manage-attendance?/addAttendee">Add</button
					>
				</div>
			</form>
		</div>
	</span>
{/if}

<style lang="scss">
	span {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(0.25em);
		z-index: 100;

		div {
			padding: 2.5em 4.5em;
			border-radius: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1em;
			position: relative;

			.close-btn {
				position: absolute;
				border: none;
				top: -1em;
				right: -1em;
				background-color: transparent;
				img {
					height: 2.3em;
					cursor: pointer;
				}
			}

			input {
				width: 20em;
				text-align: center;
			}

			form {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 1em;
				div {
					display: flex;
					flex-direction: row;
					background-image: none;
					box-shadow: none;
					padding: 0;
					gap: 1em;
					border: none;
				}
			}
		}
	}
</style>
