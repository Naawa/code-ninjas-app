<script lang="ts">
	import '$lib/styles/global.scss'
	export let data;
</script>

<h1>Welcome admin {data.admin.name}</h1>
<slot />