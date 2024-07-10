<script lang="ts">
	export let data;
	export let currentStudentNumber: string;
	export let username: string;
	import { blur, scale } from 'svelte/transition';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	const {
		form: modifyStudentNumberForm,
		enhance: modifyStudentNumberEnhance,
		errors: modifyStudentNumberErrors,
		message: modifyStudentNumberMessage,
		constraints: modifyStudentNumberConstraints
	} = superForm(data.modifyStudentNumberForm);

	let showModal = false;
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="modify-btn bold-9">Modify</button
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

			<h3>Modify Student Number</h3>
			<h4>Student Number: {currentStudentNumber}</h4>
			<form method="post" use:modifyStudentNumberEnhance>
				<input
					type="number"
					name="student_number"
					placeholder="Student Number"
					bind:value={$modifyStudentNumberForm.student_number}
					{...$modifyStudentNumberConstraints.student_number}
				/>
				{#if $modifyStudentNumberMessage}
					<h5>{$modifyStudentNumberMessage}</h5>
				{/if}
				<div>
					<button
						class="primary-btn bold-9"
						type="submit"
						formaction="/admin/manage-students/{username}?/updateBelt">Update</button
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
