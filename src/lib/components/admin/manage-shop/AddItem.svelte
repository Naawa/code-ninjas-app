<script lang="ts">
	let showModal = false;
	import { blur, scale } from 'svelte/transition';
	// import SuperDebug, { superForm } from 'sveltekit-superforms';
	export let data;

	// const {
	// 	form: addItemForm,
	// 	message: addItemMessage,
	// 	constraints: addItemConstraints,
	// 	errors: addItemErrors,
	// 	enhance: addItemEnhance
	// } = superForm(data.addItemForm);
</script>

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="primary-btn bold-9 cursor-pointer">ADD</button
>

{#if showModal}
	<span>
		<div class="add-item " transition:blur>
			<h3 class="white ">Add Item</h3>
			<button
				class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="/close-login.png" alt="" />
			</button>

			<form action="">
				<input type="text" name="username" placeholder="Item Name">
				<input type="number" name="number" placeholder="Points Needed">
				<input type="number" name="number" placeholder="Stock">
				<button class="primary-btn bold-9 cursor-pointer">Add</button>
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
			background-image: linear-gradient(#1ab7e5, #00619a);
			padding: 4em 4.5em;
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
				top: 1em;
				right: 1em;
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
