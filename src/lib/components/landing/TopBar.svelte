<script>
	import LoginModal from "./LoginModal.svelte";
</script>

<div>
    <img src="logos/cnbc.svg" alt="CNBC logo">
    <LoginModal></LoginModal>
</div>

<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2em 0 0;
        
        img {
            max-height: 6em;
        }
    }
</style>

