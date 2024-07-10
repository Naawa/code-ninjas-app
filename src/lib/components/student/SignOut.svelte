<script lang="ts">
	import { scale } from "svelte/transition";
</script>

<form in:scale|global={{ delay: 400 }} out:scale|global={{ duration: 100}} method="POST" action="/student/dashboard">
    <button class="caution-btn bold-9 cursor-pointer">Sign Out</button>
</form>