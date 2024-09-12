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
				if (center) {
					center.typing_bg_src = payload.new.typing_bg_src
					center.training_bg_src = payload.new.training_bg_src_bg_src
					center.exploration_bg_src = payload.new.exploration_bg_src
				}
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

	function getTimerBackground(path: string) {
		const { data } = supabase.storage
			.from('images')
			.getPublicUrl(path);
			return data.publicUrl;
	}

	let timeblock: string = ""
	let timerbg: string = ""

	$: if(timeblock == "Typing!") {
		timerbg = getTimerBackground(center?.typing_bg_src || "")
	}
	else if(timeblock == "Ninja Training!") {
		timerbg = getTimerBackground(center?.training_bg_src || "")
	}
	else if(timeblock == "Ninja Exploration!") {
		timerbg = getTimerBackground(center?.exploration_bg_src || "")
	}
	else {
		timerbg = getTimerBackground(center?.typing_bg_src || "")
	}
</script>


<section>
	{#if timerbg.length > 0}
		<img src={timerbg} role="presentation">
	{/if}
	<Timer bind:timeBlock={timeblock}></Timer>
	<DisplayNameTags {attendeeProfiles}></DisplayNameTags>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
		align-items: center;
		justify-content: center;
		min-height: 100vh;

		
		img {
			position: absolute;
			z-index: -1;
			height: 100vh;
			width: 100vw;
		}
	}
</style>