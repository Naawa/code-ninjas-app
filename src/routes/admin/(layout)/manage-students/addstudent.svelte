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
	class="primary-btn bold-9">ADD</button
>

{#if showModal}
	<span>
		<div class="add-student">
            <div-top></div-top>
            <h3 class = "white">Create Student Profile</h3>
            <button class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="../close-login.png" alt="" />
			</button>
            
            <form method="post" > 
                <input type="full-name" name="Full Name" placeholder="Student Full Name" class = "text-center">
                <input type="password" name="password" placeholder="Password" class = "text-center">
                <input type="email" name="Parent E-mail" placeholder="Parent's E-mail Address" class = "text-center">
                <label for="date" class = "white bold-9">Date Of Birth</label>
                <input type="date" id="date" name="date" class = "text-center">
                <!-- <select id="dropdown" name="dropdown">
                    <option value="option2">White Belt</option>
                    <option value="option2">Yellow Belt</option>
                    <option value="option3">Red Belt</option>
                </select> -->

            </form>
            <button class="primary-btn bold-9">ADD STUDENT</button>
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
                transform: translateX(12.4em) translateY(-17em);
                background-color: transparent;
                img {
                    height: 2.3em;
                    cursor: pointer;
                }
			}

            label {
                margin-bottom: -1em;
            }

			div {
                background-image: none;
				flex-direction: row;
                gap: 0;
                padding: 0;
                border-radius: 0;
                border: solid 1px black;
                box-shadow: none;

                button {
                    cursor: pointer;
                }

			}

            form {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1em 0;
                width: 100%;
                gap: 1em;
                

                button {
                    transform: translateX(0) translateY(0);
                    position: relative;
                    width: fit-content;
                    margin-top: 1em;
                }
            }

            select {
                width: 30%;
            }
		}

        
	}
    .active {
        background-color: #00619A;
    }
    
</style>