<script>
  import Navbar from './Components/Navbar.svelte';
  import Footer from './Components/Footer.svelte';
  import Homepage from './Homepage/Homepage.svelte';

  import { Router, Link, Route } from "svelte-routing";
  export let url = "";

  

</script>

<!--

<Navbar />
<Homepage />
<Footer />

-->

<Router {url}>
  <Navbar />
  <div class="mt-2.5">
    <Route path="/Homepage" component={Homepage} />
  </div>
  <Footer />
</Router>



<!--


  <Router {url}>
  <Navbar/>
  <div class="mt-2.5">
    <Route path="/Homepage" component={Homepage} />
  </div>
  <Footer/>
</Router>


-->