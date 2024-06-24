<script lang="ts">
	let showModal = false;
	let user = 'student';
	import { scale } from 'svelte/transition';
</script>

<button
	on:click={() => {
		showModal = true;
	}}
	class="primary-btn bold-9">Login</button
>

{#if showModal}
	<span>
		<div transition:scale>
			<button class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="close-login.png" alt="" />
			</button>
            <img src="logos/cnbc.svg" alt="CNBC logo">
			<div>
				<button class="toggle-btn bold-9 {user == 'student' ? 'active' : ''}" on:click={() => {user = "student"}}>Student</button>
				<button class="toggle-btn bold-9 {user == 'admin' ? 'active' : ''}" on:click={() => {user = "admin"}}>Admin</button>
			</div>
            <form autocomplete="off">
                <input type="email" name="email" placeholder="email@example.com">
                <input type="password" name="password" placeholder="**********">
                <button class="primary-btn bold-9">Login</button>
            </form>
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
		backdrop-filter: blur(5px);

		div {
            background-image: linear-gradient(#1AB7E5, #00619A);
			padding: 1em 2em;
			border-radius: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
            gap: 1em;

			.close-btn {
                position: absolute;
				border: none;
                transform: translateX(9em) translateY(-14.25em);
                background-color: transparent;
                img {
                    height: 2em;
                }
			}

			div {
                background-image: none;
				flex-direction: row;
                gap: 0;
                padding: 0;
                border-radius: 0;
                border: solid 1px black;

                button {
                    background-color: transparent;
                }
                .toggle-btn {
                    position: relative;
                    color: white;
                    padding: 1em;
                    width: 10em;
                    transform: translateX(0) translateY(0);
                    border: none;

                    &:first-of-type {
                        border-right: solid 1px black;
                    }

                    &:hover {
                        background-color: #00619A;
                    }
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
                    background-color: #07a881;
                    width: fit-content;
                    margin-top: 1em;
                }
            }
		}
	}
    .active {
        background-color: #00619A;
    }
</style>
