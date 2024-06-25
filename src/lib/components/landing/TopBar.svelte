<script>
	import { superForm } from "sveltekit-superforms";
	import LoginModal from "./LoginModal.svelte";

    export let data;
</script>

<div id = "header" class ="header-gradient">
    <img src="logo-side.png" alt="CNBC logo">
    <LoginModal {data}></LoginModal>

</div>



<style lang="scss">
    #header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:  1.5em 2em;
        box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
        
        img {
            max-height: 3em;
        }
    }
</style>

