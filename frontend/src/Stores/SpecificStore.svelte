<script>
  import { onMount } from 'svelte';
  export let id;
  let specStore = null; 
  let isLoading = true; 

  onMount(() => {
    fetch(`http://localhost:8080/stores/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          specStore = data.map(item => ({
            ...item,
            url: item.url.startsWith('http://') || item.url.startsWith('https://') ? item.url : `https://${item.url}`,
          }));
        } else {
          specStore = []; 
        }
        isLoading = false; 
      })
      .catch((error) => {
        console.error('Failed to fetch store:', error);
        isLoading = false; 
      });
  });
</script>

{#if specStore}
  {#each specStore as item (item.id)}
    <div class="flex flex-col items-center">
      <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white m-4 p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
        <p class="text-lg font-bold">{item.name}</p>
        <p>District: {item.district}</p>
        <a href={item.url} target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-500">Visit Store</a>
        <div class="flex justify-end space-x-2 mt-2">
          <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</button>
          <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  {/each}
{:else}
  <p>Loading store details...</p>
{/if}
