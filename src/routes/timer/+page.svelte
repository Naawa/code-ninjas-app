<script lang="ts">
	import { browser } from '$app/environment';
	import { invalidateAll } from '$app/navigation';
	import DisplayNameTags from '$lib/components/timer/DisplayNameTags.svelte';
	import Timer from '$lib/components/timer/Timer.svelte';
	import type { Database } from '$lib/db/supabase.js';

	export let data;

	let { supabase, session, center } = data;
	$: ({ supabase, session, center } = data);

	async function getAttendeeProfile(attendee: string) {
		let { data: student_profiles, error } = await supabase
			.from('student_profiles')
			.select('*')
			.eq('student_number', attendee);

		if (student_profiles) {
			return student_profiles[0];
		}
	}

	const studentProfiles = supabase
		.channel('student-profiles-update-channel')
		.on(
			'postgres_changes',
			{ event: 'UPDATE', schema: 'public', table: 'student_profiles', filter: `center=eq.${data.center?.location}` },
			(payload) => {
				let updatedStudentProfile = payload.new as StudentProfile
				updateAttendeeProfile(updatedStudentProfile)
			}
		)
		.subscribe();

	const centerProfiles = supabase
		.channel('center-profiles-update-channel')
		.on(
			'postgres_changes',
			{ event: 'UPDATE', schema: 'public', table: 'center_profiles', filter: `location=eq.${data.center?.location}` },
			(payload) => {
				attendance = payload.new.attendance;
				updateAttendance();
			}
		)
		.subscribe();

	let attendance = center?.attendance || [];
	let attendeeProfiles: StudentProfile[] = [];

	async function updateAttendance() {
		let updatedAttendance: StudentProfile[] = [];
		for (let i = 0; i < attendance?.length; i++) {
			updatedAttendance = [...updatedAttendance, await getAttendeeProfile(attendance[i])];
		}
		attendeeProfiles = updatedAttendance;
	}

	async function updateAttendeeProfile(attendeeProfile: StudentProfile) {
		for (let i = 0; i < attendeeProfiles.length; i++) {
			if (attendeeProfiles[i].student_number == attendeeProfile.student_number) {
				attendeeProfiles[i] = attendeeProfile
				break;
			}
		}
	}

	updateAttendance();
</script>


<section>
	<Timer></Timer>
	<DisplayNameTags {attendeeProfiles}></DisplayNameTags>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
</style>