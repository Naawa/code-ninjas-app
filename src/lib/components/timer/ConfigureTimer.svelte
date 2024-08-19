<script>
	import ModifyExplorationBackground from "./modify/ModifyExplorationBackground.svelte";
import ModifyTrainingBackground from "./modify/ModifyTrainingBackground.svelte";
	import ModifyTypingBackground from "./modify/ModifyTypingBackground.svelte";
	export let data;
</script>

<section class="rounded-glass-container">
    <ModifyTrainingBackground {data}></ModifyTrainingBackground>
	<ModifyTypingBackground {data}></ModifyTypingBackground>
	<ModifyExplorationBackground {data}></ModifyExplorationBackground>
</section>

<style lang="scss">
    section {
        display: flex;
		gap: 1em;
		overflow-y: scroll;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 3em 2em;
		padding: 4em;
    }
</style>