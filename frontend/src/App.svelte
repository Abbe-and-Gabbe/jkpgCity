<script>
  import Navbar from './Components/Navbar.svelte';
  import Footer from './Components/Footer.svelte';
  import Venues from './Venues/Venues.svelte';
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
</script>

<Router {url}>
  <Navbar />
  <main class="dark:bg-slate-900 bg-slate-100 dark:text-white p-12 shadow-xl h-full">
    <Route path="/Venues">
      <Venues/>
    </Route>
  </main>
</Router>
<Footer/>

