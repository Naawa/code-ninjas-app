<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	export let data;
	let { student } = data;
</script>


<section class="rounded-glass-container">
	<h2>{student?.name}</h2>
	<span>
		<div></div>
		<div></div>
	</span>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 2em;
		flex-direction: column;
		width: 100%;
		margin: 0 3em 2em;
		padding: 4em;

		span {
			display: flex;

			div {
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
