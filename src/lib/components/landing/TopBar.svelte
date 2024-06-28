<script>
    import { scale } from "svelte/transition";
	import LoginModal from "./LoginModal.svelte";
    export let data;
    console.log(data.user_role)
</script>

<div>
    <img src="logo-side.png" alt="CNBC logo" in:scale|global={{ delay: 400 }}>
    {#if data.session}
        {#if data.user_role == "admin"}
        <a in:scale|global={{ delay: 400 }} out:scale|global={{ duration: 100}} href="/admin/dashboard"><button class="primary-btn bold-9">Admin Dashboard</button></a>
        {:else}
            <a in:scale|global={{ delay: 400 }} out:scale|global={{ duration: 100}} href="/student/dashboard"><button class="primary-btn bold-9">Student Dashboard</button></a>
        {/if}
    {:else}
        <LoginModal {data}></LoginModal>
    {/if}  
</div>



<style lang="scss">
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2em 4em;
        height: 8em;
        
        img {
            height: 3em;
        }
    }
</style>

