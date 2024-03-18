<script>
  import Navbar from './Components/Navbar.svelte';
  import Footer from './Components/Footer.svelte';
  import Homepage from './Homepage/Homepage.svelte';
  import Stores from './Stores/Stores.svelte';
  import SpecificStore from './Stores/SpecificStore.svelte';
  import { Router, Link, Route } from "svelte-routing";
    import CreateStore from './Stores/CreateStore.svelte';
  export let url = "";
</script>

<Router {url}>
  <Navbar/>
  <div class="mt-2.5">
    <Route path="/" component={Homepage} />  
    <Route path="/stores" component={Stores} />
    <Route path="/stores/create" component={CreateStore} />
    <Route path="/stores/:id" let:params>
      <SpecificStore id={params.id} />
    </Route>  </div>
  <Footer/>
</Router>

