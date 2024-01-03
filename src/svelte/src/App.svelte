<script>
  import { Router, Route } from 'svelte-routing';
  import { routes } from './router';

  export let url = ""
</script>

<main class="text-svelte">
  <Router {url} basepath={window.__MICRO_APP_BASE_ROUTE__}>
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </Router>
</main>

<!-- <style src="./app.css">

</style> -->
