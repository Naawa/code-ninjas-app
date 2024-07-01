<script lang="ts">
    export let name, points;
</script>

<div class="simple-shadow">
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
        border-radius: 0.5em;
        width: 12em;
        height: 8em;
        background-color: white;
        gap: 1em;

        h3 {
            text-align: center;
        }
    }
</style>