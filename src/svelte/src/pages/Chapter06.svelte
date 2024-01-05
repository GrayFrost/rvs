<script>
  let count = 0;

  $: doubleCount = count * 2;

  const updateCount = () => {
    count++;
  };
</script>

<section>
  <h1>第六章 —— computed</h1>
  <button class="w-auto h-auto p-1 border" on:click={updateCount}> +1 </button>
  <span>
    {count}的2倍是：{doubleCount}
  </span>
</section>
