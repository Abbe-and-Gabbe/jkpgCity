<script>
  import { onMount } from 'svelte';
  let stores = [];
  let currentPage = parseInt(localStorage.getItem('currentPage'), 10) || 1;
  const storesPerPage = 5;
  let totalPages = 0;
  let visibleStores = [];

  console.log('Initial currentPage from localStorage:', currentPage);

  onMount(() => {
    fetchStores();
  });

  async function fetchStores() {
    try {
      const response = await fetch(`http://localhost:8080/`);
      const data = await response.json();
      if (Array.isArray(data)) {
        stores = data;
        totalPages = Math.ceil(stores.length / storesPerPage);
        updateVisibleStores();
      }
    } catch (error) {
      console.error(error);
    }
  }

  function updateVisibleStores() {
    const start = (currentPage - 1) * storesPerPage;
    const end = start + storesPerPage;
    visibleStores = stores.slice(start, end);
  }

  $: currentPage, updateVisibleStores();
  $: localStorage.setItem('currentPage', currentPage.toString()), currentPage;

  function goToNextPage() {
    if (currentPage < totalPages) currentPage += 1;
  }

  function goToPreviousPage() {
    if (currentPage > 1) currentPage -= 1;
  }
</script>


<div class="flex flex-col items-center">
  {#each visibleStores as store}
    <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white m-2 p-4 rounded-lg shadow-md w-full md:w-1/2">
      <a href="{store.url}" target="_blank" class="text-lg font-bold hover:underline">{store.name}</a>
      <p>District: {store.district}</p>
    </div>
  {/each}
</div>




{#if stores.length > storesPerPage}
  <div class="flex justify-center items-center space-x-4 my-4">
    <button on:click={goToPreviousPage} disabled={currentPage === 1} class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50">Previous</button>
    <span>Page {currentPage} of {totalPages}</span>
    <button on:click={goToNextPage} disabled={currentPage === totalPages} class="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50">Next</button>
  </div>
{/if}
