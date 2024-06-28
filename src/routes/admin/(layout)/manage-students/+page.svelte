<script lang="ts">
	import AddStudent from './addstudent.svelte';
	import RemoveStudent from './removestudent.svelte';

	export let data;
	import { scale } from 'svelte/transition';
</script>

<div id="student-section">
	<h1 class="text-center white text-shadow">Students Section</h1>

	<div class="button-add-remove">
		<AddStudent {data}></AddStudent>
		<RemoveStudent {data}></RemoveStudent>
	</div>
</div>

<style lang="scss">
	#student-section {
		width: 100%;
		padding: 50px;

		.button-add-remove {
			display: flex;
			justify-content: space-around;
			margin-top: 3em;
			width: 100%;
		}
	}
</style>
