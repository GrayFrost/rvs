<script>
  import { Router, Route } from 'svelte-routing';
  import OnePage from './pages/One.svelte';
  import TwoPage from './pages/Two.svelte';
  import ThreePage from './pages/Three.svelte';

  export let url = ""
</script>

<main>
  <Router {url} basepath={window.__MICRO_APP_BASE_ROUTE__}>
    <Route path="/one" component={OnePage} />
    <Route path="/two" component={TwoPage} />
    <Route path="/three" component={ThreePage} />
  </Router>
</main>

<style>

</style>
