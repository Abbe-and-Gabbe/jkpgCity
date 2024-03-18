<script>
    import { onMount } from 'svelte';

    export let id;
    let isLoading = true;
    let store = {name: '', url: '', district: ''};
    let errors = []

    onMount(async () => {
        try {
            const response = await fetch(`http://localhost:8080/stores/${id}`);
            const data = await response.json();
            if (data && data.length > 0) {
                store = data[0];
                console.log('store:', store);
            } else {
                store = { name: '', url: '', district: ''};
            }
            isLoading = false;
        } catch (error) {
            console.error('Failed to fetch store:', error);
            isLoading = false;
        }
    });

    async function handleSubmit() {
        try {
            if (store.name === '' || store.url === '' || store.district === '') {
                alert('Please fill in all fields!');
                return;
            }

            const response = await fetch(`http://localhost:8080/stores/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(store),
            });
            if (response.ok) {
                alert('Store updated successfully!');
                window.location.href = `/stores/${id}`;
            } else {
                alert('Failed to update store!');
            }
        } catch (error) {
            console.error('Failed to update store:', error);
        }
    }
</script>

<main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Edit Store</h1>

    <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-4">
            <label for="name" class="block font-bold mb-1">Name</label>
            <input type="text" id="name" bind:value={store.name} class="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>

        <div class="mb-4">
            <label for="url" class="block font-bold mb-1">URL</label>
            <input type="text" id="url" bind:value={store.url} class="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>

        <div class="mb-4">
            <label for="district" class="block font-bold mb-1">District</label>
            <input type="text" id="district" bind:value={store.district} class="border border-gray-300 rounded px-3 py-2 w-full" />
        </div>

        <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Save
        </button>
    </form>
</main>

<style>
    /* Add your custom styles here */
</style>