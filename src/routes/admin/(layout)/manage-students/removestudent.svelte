<script lang="ts">
 
    let showModal = false;
    export let data;
    import { scale } from 'svelte/transition';
  

</script>


<button
    in:scale|global={{ delay: 400 }}
	on:click={() => {
		showModal = true;
	}}
	class="primary-btn bold-9">REMOVE</button
>

{#if showModal}
	<span>
		<div class="add-student">
            <div-top></div-top>
            <h3 class = "white">Type CONFIRM to remove</h3>
            <button class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="../close-login.png" alt="" />
			</button>
            
            <form method="post" > 
                <input type="text" name="text" placeholder="CONFIRM" class = "text-center">
             
            </form>
            <button class="primary-btn bold-9">REMOVE STUDENT</button>
        </div>
	</span>
{/if}

<style lang="scss">

span {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(5px) brightness(60%);
        z-index: 2;


		div {
            background-image: linear-gradient(#1AB7E5, #00619A);
			padding: 2.5em 4.5em;
			border-radius: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
            gap: 1em;
            box-shadow: 0 0px 10px 0px rgba(74, 74, 74, 0.509);

			.close-btn {
                position: absolute;
				border: none;
                transform: translateX(14em) translateY(-7em);
                background-color: transparent;
                img {
                    height: 2.3em;
                    cursor: pointer;
                }
			}

			div {
                background-image: none;
				flex-direction: row;
                gap: 0;
                padding: 0em;
                border-radius: 0;
                border: solid 1px black;
                box-shadow: none;

			}

            button {
                cursor: pointer;
            }

		}

        
	}
  
    
</style>