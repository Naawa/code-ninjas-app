<script lang="ts">
	export let data
	export let currentPoints: number;
	export let username: string;
	import { blur, scale } from 'svelte/transition';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	const { form, enhance, errors, message, constraints } = superForm(data.form)

	let showModal = false;
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="secondary-btn bold-9">Modify</button
>

{#if showModal}
	<span>
		<div transition:blur>
			<button
				class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="/close-login.png" alt="" />
			</button>

            <h3>Modify Points</h3>
			<h4>Points: {currentPoints}</h4>
			<form method="post" use:enhance>
				<input type="number" name="pointsValue" bind:value={$form.pointsValue}>
				<input style="display: none;" name="currentPoints" type="number" bind:value={$form.currentPoints}>
				{#if $message}
					<h5>{$message}</h5>
				{/if}
				<div>
					<button class="primary-btn" type="submit" formaction="/admin/manage-students/{username}?/addPoints">Add</button>
					<button class="caution-btn" type="submit" formaction="/admin/manage-students/{username}?/removePoints">Remove</button>
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
			background-image: linear-gradient(#1ab7e5, #00619a);
			padding: 2.5em 4.5em;
			border-radius: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1em;
			box-shadow: 0 0px 10px 0px rgba(74, 74, 74, 0.509);
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
				text-align: center	;
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
