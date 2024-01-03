<script>
  import Child from './Chapter03_Child.svelte';
  let name = 'hello';

  const sayHello = () => {
    console.log('hello');
  }
</script>

<section>
  <h1>第三章 —— Props</h1>
  <Child name={name} on:sayHello={sayHello} />
</section>