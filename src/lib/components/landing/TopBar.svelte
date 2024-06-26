<script>
	import LoginModal from "./LoginModal.svelte";

    export let data;
    console.log(data.user_role)
</script>

<div id = "header" class ="header-gradient">
    <img src="logo-side.png" alt="CNBC logo">
    {#if data.session}
        {#if data.user_role == "admin"}
        <a href="/admin/dashboard"><button class="primary-btn bold-9">Admin Dashboard</button></a>
        {:else}
            <a href="/student/dashboard"><button class="primary-btn bold-9">Student Dashboard</button></a>
        {/if}
    {:else}
        <LoginModal {data}></LoginModal>
    {/if}
    
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

