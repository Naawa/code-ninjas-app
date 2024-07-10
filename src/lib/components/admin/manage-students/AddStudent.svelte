<script lang="ts">
	let showModal = false;
	import { blur, scale } from 'svelte/transition';
	import SuperDebug, { superForm } from 'sveltekit-superforms';
	export let data;

	const {
		form: addStudentForm,
		message: addStudentMessage,
		constraints: addStudentConstraints,
		errors: addStudentErrors,
		enhance: addStudentEnhance
	} = superForm(data.addStudentForm);
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="primary-btn bold-9">ADD</button
>

{#if showModal}
	<span>
		<div class="rounded-glass-container" transition:blur>
			<h3 class="white">Create Student Profile</h3>
			<button
				class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="/close-login.png" alt="" />
			</button>
			<form
				method="post"
				action="/admin/manage-students?/addStudent"
				autocomplete="off"
				use:addStudentEnhance
			>
				<button type="submit" disabled style="display: none" aria-hidden="true"></button>
				<input
					type="text"
					name="name"
					placeholder="Student Full Name"
					bind:value={$addStudentForm.name}
					{...$addStudentConstraints.name}
				/>
				{#if $addStudentErrors.name}
					<small>{$addStudentErrors.name}</small>
				{/if}
				<input
					type="text"
					name="username"
					placeholder="Username"
					bind:value={$addStudentForm.username}
					{...$addStudentConstraints.username}
				/>
				{#if $addStudentErrors.username}
					<small>{$addStudentErrors.username}</small>
				{/if}
				<input
					type="email"
					name="email"
					placeholder="Parent's E-mail Address"
					bind:value={$addStudentForm.email}
					{...$addStudentConstraints.email}
				/>
				{#if $addStudentErrors.email}
					<small>{$addStudentErrors.email}</small>
				{/if}
				<input
					type="password"
					name="password"
					placeholder="Password"
					bind:value={$addStudentForm.password}
					{...$addStudentConstraints.password}
				/>
				{#if $addStudentErrors.password}
					<small>{$addStudentErrors.password}</small>
				{/if}
				<select
					placeholder="Belt"
					name="belt"
					bind:value={$addStudentForm.belt}
					{...$addStudentConstraints.belt}
				>
				<option value="" disabled>Belt</option>
					<option>White</option>
					<option>Yellow</option>
					<option>Orange</option>
					<option>Green</option>
					<option>Blue</option>
					<option>Red</option>
					<option>Purple</option>
					<option>Brown</option>
					<option>Black</option>
				</select>
				<input
					type="number"
					name="student_number"
					placeholder="Student Number"
					bind:value={$addStudentForm.student_number}
					{...$addStudentConstraints.student_number}
				/>
				<label for="date_of_birth" class="bold-9">Date Of Birth</label>
				<input type="date" name="date_of_birth" />
				<input
					type="text"
					name="center"
					style="display: none;"
					bind:value={$addStudentForm.center}
				/>
				{#if $addStudentMessage}
					<h5>{$addStudentMessage}</h5>
				{/if}
				<button class="primary-btn bold-9">Add</button>
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
		backdrop-filter: blur(0.5em);
		z-index: 2;

		div {
			padding: 4em 4.5em;
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

			form {
				display: flex;
				align-items: center;
				flex-direction: column;
				padding: 1em 0;
				width: 100%;
				gap: 1em;

				select {
					text-align: center;
				}
				input {
					text-align: center;
				}

				label {
					color: white;
				}

				h5,
				small {
					color: white;
				}

				button {
					transform: translateX(0) translateY(0);
					position: relative;
					width: fit-content;
					margin-top: 1em;
				}
			}
		}
	}
</style>
