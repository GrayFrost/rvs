<script>
  const list = [1,2,3];
</script>

<section>
  <h1>第九章 —— for</h1>
  <ul>
    {#each list as item, index}
      <li>item - {item}</li>
    {/each}
  </ul>
</section>