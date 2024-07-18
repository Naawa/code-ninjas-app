<script lang="ts">
    export let student: StudentProfile

    let icon_src = student.profile_icon_src || ""
    let banner_src = student.profile_icon_src || ""
</script>

<div class="rounded-glass-container" style="background-image: url('{banner_src}');">
    <img src="{icon_src}" alt="">
    <h3>{student.name}</h3>
</div>

<style lang="scss">
    div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;    
        padding: 1em;
        width: 18em;
        height: 5em;

        img {
            height: 2.75em;
            width: 2.75em;
            border-radius: 100%;
            background-color: white;
            border: solid 0.2em rgb(172, 192, 222);
        }

        h3 {
            translate: 0 0.09em;
        }
    }
</style>