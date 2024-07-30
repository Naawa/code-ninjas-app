<script lang="ts">
	import { scale, blur } from "svelte/transition";

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
			<img src="/close-login.png" alt=""/>
			</button>
			<h3>Modify Belt</h3>
			<form method="post">
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
