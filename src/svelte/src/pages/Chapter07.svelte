<script>
  let count = 0;
  let oldCount = count;
  
  $: if (count !== oldCount) {
    console.log('count改变了');
    oldCount = count;
  }

  const updateCount = () => {
    count++;
  }
</script>

<section>
  <h1>第七章 —— watch</h1>
  <button class="w-auto h-auto p-1 border" on:click={updateCount}>+1</button>
  <span>count: {count}</span>
</section>