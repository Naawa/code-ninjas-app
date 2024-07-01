<script lang="ts">
	import AddStudent from '$lib/components/admin/dashboard/manage-students/AddStudent.svelte';
	import RemoveStudent from '$lib/components/admin/dashboard/manage-students/RemoveStudent.svelte';
	
	export let data;
</script>

<section>
	<h1 class="text-center white text-shadow">Students Section</h1>
	<div class="button-add-remove">
		<AddStudent {data}></AddStudent>
		<RemoveStudent {data}></RemoveStudent>
	</div>
	<span>
		{#each data.students as student}
			<div>
				{student}
			</div>
		{/each}
	</span>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 2em;
		align-items: center;
		flex-direction: column;
		width: 100%;

		div {
			display: flex;
			justify-content: space-around;
			gap: 2em;
			align-items: center;
			width: 100%;
		}
	}
</style>
