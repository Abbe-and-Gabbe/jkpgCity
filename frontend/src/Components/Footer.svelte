<script>
    import {link} from "svelte-routing"
</script>

<footer class="bottom-0 left-0 z-20 w-full p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">JKPGCITY</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="/" use:link  class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="/stores" use:link class="hover:underline me-4 md:me-6">Stores</a>
        </li>
    </ul>
</footer>