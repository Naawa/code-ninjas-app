<script lang="ts">
	import { scale } from "svelte/transition";
</script>

<form in:scale|global={{ delay: 400 }} out:scale|global={{ duration: 100}} method="POST" action="/admin/dashboard">
    <button class="primary-btn bold-9">Sign Out</button>
</form>