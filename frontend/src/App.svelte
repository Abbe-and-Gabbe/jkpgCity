<script>
  import Navbar from './Components/Navbar.svelte';
  import Footer from './Components/Footer.svelte';
  import Homepage from './Homepage/Homepage.svelte';

  import { Router, Link, Route } from "svelte-routing";
  export let url = "";
</script>

<Router {url}>
  <Navbar />
  <div>
    <Route path="/Homepage" component={Homepage} />
  </div>
  <Footer />
</Router>


