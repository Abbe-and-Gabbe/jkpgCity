<script>
  import { onMount } from 'svelte';
  import { Link } from "svelte-routing";
  let stores = [];
  let currentPage =  1;
  const storesPerPage = 6 ;
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
  <h1 class="text-3xl font-bold my-4">Stores</h1>
  <Link to="/stores/create" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create a new store</Link>
</div>

<div class="flex flex-col items-center">
  {#each visibleStores as store}
    <div class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white m-2 p-4 rounded-lg shadow-md w-full md:w-1/2">
      <Link to={`/stores/${store.id}`} class="text-lg font-bold hover:underline">{store.name}</Link>
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
