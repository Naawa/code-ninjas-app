<script lang="ts">
	import { get } from 'svelte/store';

	export let data;

	let { supabase, session, center, admin } = data;
	$: ({ supabase, session, center, admin } = data);

	import { scale, blur } from 'svelte/transition';

	let showModal = false;
	let backgroundImagePath: string | null = null;
	let uploading = false;
	let files: FileList;


	const uploadImage = async () => {
		try {
			uploading = true;

			if (!files || files.length === 0) {
				throw new Error('You must select an image to upload.');
			}

			const file = files[0];
			const fileExt = file.name.split('.').pop();
			const filePath = `${admin.id}/timerbg.${fileExt}`;

			const { data, error } = await supabase.storage.from('images').upload(filePath, file, {
				upsert: false
			});
			console.log(data);
			if (error) {
				throw error;
			}
			backgroundImagePath = filePath
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				throw new Error(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	async function getPreviewImage() {
		const { data } = await supabase.storage.from('images').getPublicUrl(`${admin.id}/timerbg.jpg`);

		if(data) {
			console.log(data.publicUrl)
			return data.publicUrl
		}
	}
</script>

<h3>Timer Preview</h3>
{#await getPreviewImage()}
	<h4>Loading preview...</h4>
{:then previewImageURL} 
	<img src={previewImageURL} alt="img">
{/await}

<button
	in:scale
	on:click={() => {
		showModal = true;
	}}
	class="modify-btn bold-9">Modify Timer Background</button
>

{#if showModal}
	<span>
		<div transition:blur class="rounded-glass-container">
			<button
				class="close-btn"
				on:click={() => {
					showModal = false;
				}}
			>
				<img src="/close-login.png" alt="" />
			</button>
			<h3>Upload New Background</h3>
			<form method="post">
				{#if uploading}
					<h4>Uploading...</h4>
				{:else}
					<label class="tertiary-btn">
						<input
							type="file"
							id="single"
							accept="image/*"
							bind:files
							on:change={uploadImage}
							disabled={uploading}
						/>
						Choose Image
					</label>
				{/if}
				<input
					type="text"
					style="display: none;"
					name="timerbgurl"
					bind:value={backgroundImagePath}
				/>
				<button class="primary-btn">Upload</button>
			</form>
		</div>
	</span>
{/if}

<style lang="scss">
	#preview {
		aspect-ratio: 16/9;
		min-height: 200px;
	}
	span {
		position: absolute;
		height: 100vh;
		width: 100vw;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(0.25em);
		z-index: 100;

		div {
			padding: 2.5em 4.5em;
			border-radius: 1em;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1em;
			position: relative;

			.close-btn {
				position: absolute;
				border: none;
				top: -1em;
				right: -1em;
				background-color: transparent;
				img {
					height: 2.3em;
					cursor: pointer;
				}
			}

			form {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				gap: 1em;
				width: 100%;

				div {
					display: flex;
					flex-direction: row;
					background-image: none;
					box-shadow: none;
					padding: 0;
					gap: 1em;
					border: none;
				}

				label {
					input {
						display: none;
					}
				}
			}
		}
	}
</style>
