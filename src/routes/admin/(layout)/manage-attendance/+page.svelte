<script>
	import AddAttendee from '$lib/components/admin/attendance/AddAttendee.svelte';
	import DisplayAttendance from '$lib/components/admin/attendance/DisplayAttendance.svelte';
	import RemoveAttendee from '$lib/components/admin/attendance/RemoveAttendee.svelte';


	export let data;
</script>

<section>
	<h1>Manage Attendance</h1>
	<span>
        <AddAttendee {data}></AddAttendee>
		<RemoveAttendee {data}></RemoveAttendee>
    </span>
	<DisplayAttendance></DisplayAttendance>
</section>

<style lang="scss">
	section {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 2em;

        span {
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100%;
        }
	}
</style>
