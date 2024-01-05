<script>
  import Child from "./Chapter06_Child.svelte";

  let fatherRef;
  let childRef;
  let className;

  $: {
    if (fatherRef) {
      className = fatherRef.className;
    }
  }

  const sayHello = () => {
    if (childRef) {
      childRef.sayHello();
    }
  };
</script>

<section>
  <h1>第六章 —— ref</h1>
  <div bind:this={fatherRef} class="w-10 h-10 border"></div>
  <div>className is: {className}</div>
  <button
    class="w-auto h-auto p-1 flex items-center justify-center border rounded-sm"
    on:click={sayHello}
  >
    通过ref调用子应用方法
  </button>
  <Child bind:this={childRef} />
</section>
