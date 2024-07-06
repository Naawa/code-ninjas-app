<script lang="ts">
	import AddStudent from '$lib/components/admin/manage-students/AddStudent.svelte';
	import RemoveStudent from '$lib/components/admin/manage-students/RemoveStudent.svelte';
	import StudentCard from '$lib/components/admin/manage-students/StudentCard.svelte';

	export let data;
</script>

<section>
	<h1>Manage Students</h1>
	<div class="button-add-remove">
		<AddStudent {data}></AddStudent>
		<RemoveStudent {data}></RemoveStudent>
	</div>
	<span>
		{#if data.students}
			{#each data.students as student}
				<a href="/admin/manage-students/{student.username}">
					<StudentCard {...student}></StudentCard>
				</a>
			{/each}
		{/if}
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

		span {
			display: flex;
			gap: 1em;
		}
	}
</style>
