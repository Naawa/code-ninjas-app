<script lang="ts">
    export let attendingStudents;
</script>

<span>
    {#each attendingStudents as student}
        <div class="rounded-glass-container">
            <h3>{student.name}</h3>
            <form method="post">
                <button formaction="/admin/manage-attendance?/removeAttendee" class="caution-btn bold-9">Remove</button>
            </form>
        </div>
    {/each}
</span>

<style lang="scss">
    span {
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-self: center;
            gap: 1em;
            padding: 2em;
            height: 10em;
            width: 16em;

            h3 {
                text-align: center;
            }
            form {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>