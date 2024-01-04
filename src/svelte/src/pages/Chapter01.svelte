<script>
  import { onMount } from 'svelte';
  import { svelteCode } from '../../../code/Chapter01';
  let count = 0;

  onMount(() => {
    window.microApp.dispatch({ data: svelteCode });
  });
</script>

<section>
  <h1>第一章 —— 变量</h1>
  <section>变量：{ count }</section>
</section>