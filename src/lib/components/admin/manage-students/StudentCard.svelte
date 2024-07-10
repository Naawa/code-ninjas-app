<script lang="ts">
    export let name, points;
</script>

<div class="rounded-glass">
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

        h4 {
            text-align: center;
        }
    }
</style>