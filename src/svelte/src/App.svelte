<script>
  import { Router, Route } from 'svelte-routing';
  import { routes } from './router';
  import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

  export let url = ""
</script>

<main class="text-svelte">
  <Router {url} basepath={qiankunWindow.__POWERED_BY_QIANKUN__ ? '/svelte' : '/'}>
    {#each routes as route}
      <Route path={route.path} component={route.component} />
    {/each}
  </Router>
</main>

<!-- <style src="./app.css">

</style> -->
