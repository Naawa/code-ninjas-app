<script lang="ts">
    export let name, points;
</script>

<div>
    <h4>{name}</h4>
    {#if points}
        <b>{points} Pts</b>
    {:else}
        <b>0 Pts</b>
    {/if}
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2em;
        width: 16em;
        height: 10em;
        gap: 1em;
        border-radius: 1em;
        background-color: #ffffff0f;
        backdrop-filter: blur(2em);
        box-shadow: 0 0 0.1em 0.05em rgba(255, 255, 255, 0.5);

        &:hover {
            background-color: #0c54935c;
        }
        h4 {
            text-align: center;
        }
    }
</style>