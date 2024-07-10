<script lang="ts">
	
	export let data;
	let showModal = false;
	const { form: removeStudentForm, message: removeStudentMessage, constraints: removeStudentConstraints, errors: removeStudentErrors, enhance: removeStudentEnhance } = superForm(data.removeStudentForm);
	import { blur, scale } from 'svelte/transition';
	import { superForm } from 'sveltekit-superforms';
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="modify-btn bold-9">REMOVE</button
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

			<form method="post" action="/admin/manage-students?/removeStudent" use:removeStudentEnhance>
				<input type="text" name="username" placeholder="Student Username" bind:value={$removeStudentForm.username} {...$removeStudentConstraints}>
				<input type="text" name="center" style="display: none;" bind:value={$removeStudentForm.center}>
				{#if $removeStudentErrors.name}
                    <small>{$removeStudentErrors.name}</small>
                {/if}
				{#if $removeStudentMessage}
					<h5>{$removeStudentMessage}</h5>
				{/if}
				<button class="caution-btn bold-9">Remove</button>
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
		z-index: 2;

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

			div {
				background-image: none;
				flex-direction: row;
				gap: 0;
				padding: 0em;
				border-radius: 0;
				border: solid 1px black;
				box-shadow: none;
			}

			form {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 1em;
				input {
					text-align: center;
				}

				h5, small {
					color: white
				}
			}
		}
	}
</style>
