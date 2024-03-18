<script>
    let storeName = '';
    let storeUrl = '';
    let storeDistrict = '';

    let error = [];

    function validateForm() {
        // Reset error message
        error = [];

        // Generate error message- based on name, url, or district and add to error array
        if (storeName === '') {
            error.push('Store name is required');
        }
        if (storeUrl === '') {
            error.push('Store URL is required');
        }
        if (storeDistrict === '') {
            error.push('Store district is required');
        }
    }

    function handleSubmit() {
        // Reset error message
        error = [];

        // Send a POST request to the server
        fetch('http://localhost:8080/stores/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: storeName,
                url: storeUrl,
                district: storeDistrict,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    validateForm();
                    throw new Error('Failed to create store');
                }
                console.log('Response:', response);
                // Show success message and redirect to the stores page
                alert('Store created successfully');
                window.location.href = '/stores';

                return response.json();
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                validateForm();
            });
    }
</script>

<main class="max-w-md mx-auto">

            <div class="mb-4">
                {#if error.length > 0}
                    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Error:</strong>
                        <ul>
                            {#each error as message}
                                <li>{message}</li>
                            {/each}
                        </ul>
                    </div>
                {/if}
            </div>
    <form on:submit|preventDefault={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="storeName">
                Store Name
            </label>
            <input
                type="text"
                id="storeName"
                bind:value={storeName}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter store name"
            />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="storeUrl">
                Store URL
            </label>
            <input
                type="text"
                id="storeUrl"
                bind:value={storeUrl}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter store URL"
            />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="storeDistrict">
                Store District
            </label>
            <input
                type="text"
                id="storeDistrict"
                bind:value={storeDistrict}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter store district"
            />
        </div>
        <div class="flex items-center justify-between">
            <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Create Store
            </button>
        </div>
    </form>
</main>
