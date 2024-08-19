<script lang="ts">
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
			const timestamp = new Date().toTimeString();
			const filePath = `${admin.id}/typing-bg-${timestamp}.${fileExt}`;

			const { data, error } = await supabase.storage.from('images').upload(filePath, file, {
				upsert: false
			});

			if (error) {
				throw error;
			} else {
				backgroundImagePath = filePath;
				const { data, error } = await supabase
					.from('center_profiles')
					.update({ typing_bg_src: backgroundImagePath })
					.eq('id', admin.id)
					.select();
			}
		} catch (error) {
			if (error instanceof Error) {
				throw new Error(error.message);
			}
		} finally {
			uploading = false;
		}
	};

	async function getPreviewImage() {
		let { data: center_profiles, error } = await supabase
			.from('center_profiles')
			.select('typing_bg_src');

		if (center_profiles.at(1).typing_bg_src) {
			const { data } = await supabase.storage
				.from('images')
				.getPublicUrl(center_profiles.at(1).typing_bg_src);
			return data.publicUrl;
		}
		return null;
	}
</script>

<section>
	<h3>Typing Background</h3>
	{#if !uploading}
		{#await getPreviewImage()}
			<h4>Loading preview...</h4>
		{:then previewImageURL}
			{#if previewImageURL}
				<img id="preview" src={previewImageURL} alt="img" />
			{:else}
				<h5>Typing background not set.</h5>
			{/if}
		{/await}
	{/if}

	<button
		in:scale
		on:click={() => {
			showModal = true;
		}}
		class="modify-btn bold-9">Modify</button
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
				{#if uploading}
					<h4>Uploading...</h4>
				{:else}
					<label class="tertiary-btn">
						<input
							type="file"
							id="single"
							accept="image/*"
							bind:files
							on:change={() => {
								uploadImage();
								showModal = false;
							}}
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
			</div>
		</span>
	{/if}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	#preview {
		aspect-ratio: 16/9;
		max-width: 250px;
	}
	button {
		width: fit-content;
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
</style>
