<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let attendingStudents;
	export let data;

	const {
		form: removeAttendeeForm,
		enhance: removeAttendeeEnhance,
		errors: removeAttendeeErrors,
		message: removeAttendeeMessage,
		constraints: removeAttendeeConstraints
	} = superForm(data.removeAttendeeForm);
</script>

<span>
	<a href="/timer" class="bold-9 tertiary-btn" target="_blank">Open Timer</a>
	{#each attendingStudents as student}
		<div class="rounded-glass-container">
			<h3>{student.name}</h3>
			<form method="post">
				<input type="text" placeholder="Scan Wristband" name="studentNumber" bind:value={$removeAttendeeForm.studentNumber}>
				<button class="caution-btn" formaction="/admin/manage-attendance?/removeAttendee" on:click={() => {
					$removeAttendeeForm.studentNumber = student.student_number
					
				}}>Remove</button>
			</form>
		</div>
	{/each}
</span>

<style lang="scss">
	span {
		display: flex;
		flex-direction: column;
		gap: 2em;
		div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-self: center;
			gap: 1em;
			padding: 2em;
			height: 10em;
			width: 16em;

			h3 {
				text-align: center;
			}
		}

		form {
			display: flex;
			justify-content: center;
			align-items: center;

			input {
				display: none;
			}
		}
	}
</style>
