<script>
	import ModifyTimerBackground from "./modify/ModifyTimerBackground.svelte";

    export let data
</script>

<section class="rounded-glass-container">
    <ModifyTimerBackground {data}></ModifyTimerBackground>
</section>

<style lang="scss">
    section {
        display: flex;
		gap: 1em;
		flex-direction: column;
		width: 100%;
		margin: 0 3em 2em;
		padding: 4em;
    }
</style>