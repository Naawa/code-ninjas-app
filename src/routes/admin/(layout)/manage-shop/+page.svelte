<script lang="ts">

    import AddItem from '$lib/components/admin/manage-shop/AddItem.svelte';
    import RemoveItem from '$lib/components/admin/manage-shop/RemoveItem.svelte';

    export let data;

	
</script>

<section>
	<h1>Manage Shop Inventory</h1>
	<div class="button-add-remove">
		<AddItem {data}></AddItem>
        <RemoveItem {data}></RemoveItem>
		
	</div>
	<span>
		<div class="items">

			<div class="box rounded-glass text-center">
				<img src="../Kart-ninja.png" alt="">
				<h3>Item Name</h3>
				<b>25 points</b>
				<p>description</p>
				<button class = "primary-btn"> MODIFY </button>
			</div>
			</div>
	</span>
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 2em;
		align-items: center;
		flex-direction: column;
		width: 100%;

		div {
			display: flex;
			justify-content: space-around;
			gap: 2em;
			align-items: center;
			width: 100%;
		}

		span {
			display: flex;
			width: 100%;
			justify-content: center;
			gap: 1em;
		}
		.items {
            display: flex;
            flex-wrap: wrap;
            margin: 2em;
            gap:2em;
            justify-content: center;

            .box {
                display: flex;
                flex-direction: column;
                padding: 1.5em;
                width: 15em;
                height: 18em;
                justify-content: center;
                gap:0.35em;

                button {
                    margin-bottom:2em;
                }
       
                img {
                    width: 8em;
                    // height: 8em;
                    margin: 1em auto 1em auto;
                    border: 3mm ridge #0f4e72;
                }
                
            }
            
            
        }

	}
</style>
