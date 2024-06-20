<script lang="ts">
    let showModal = false;
</script>

<button on:click={() => { showModal = true }}>
    Login
</button>

{#if showModal}
<section>
    <div>
        <button on:click={() => {
            showModal = false
        }}>Exit</button>
        <a href="/admin/login"><button>Admin</button></a>
        <a href="/student/login"><button>Student</button></a>
    </div>
</section>
{/if}

<style lang="scss">
    section {
        position: absolute;
        height: 100vh;
        width: 100vw;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
            padding: 2em;
            background-color: white;
        }
    }
</style>
