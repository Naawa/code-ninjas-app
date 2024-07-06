<script>
	import { page } from '$app/stores';
</script>

{#if $page.error?.message}
    <div>
        <span class="light-rounded-glass">
            <h1>{$page.error.message}</h1>
            <a href="/"><button class="primary-btn bold-9">Home</button></a>
        </span>
    </div>
{/if}

<style lang="scss">
    div {
        position: absolute;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        span {
            padding: 4em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2em;

            button {

                a {
                    color: white;
                }
            }
        }
    }
</style>