<script lang="ts">
	import StudentNameTag from "./StudentNameTag.svelte";

    export let attendeeProfiles: StudentProfile[]
</script>

<span>
    {#each attendeeProfiles as student}
        <StudentNameTag {student}></StudentNameTag>
    {/each}
</span>

<style lang="scss">
    span {
        display: flex;
        justify-content: center;
        gap: 2em;
        padding: 1em;
    }
</style>