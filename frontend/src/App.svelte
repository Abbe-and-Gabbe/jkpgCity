<script>
  import Navbar from './Components/Navbar.svelte';
  import Footer from './Components/Footer.svelte';
  import Stores from './Stores/Stores.svelte';
  import SpecificStore from './Stores/SpecificStore.svelte';
  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
</script>

<Router {url}>
  <Navbar/>
  <div class="mt-2.5">
    <Route path="/stores" component={Stores} />
    <Route path="/stores/:id" let:params>
      <SpecificStore id={params.id} />
    </Route>  </div>
  <Footer/>
</Router>
