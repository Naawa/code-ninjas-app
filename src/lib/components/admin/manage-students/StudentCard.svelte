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
        border-radius: 1em;
        width: 12em;
        height: 8em;
        gap: 1em;
        background-color: #0c549397;
        backdrop-filter: blur(10em);
        box-shadow: 0 0 0.1em 0.1em rgba(255, 255, 255, 0.228);

        &:hover {
            background-color: #0c54935c;
        }
    }
</style>