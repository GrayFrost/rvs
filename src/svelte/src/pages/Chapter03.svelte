<script>
  import { useSendCode } from '../hooks/useSendCode';
  import Child from './Chapter03_Child.svelte';
  let name = 'hello';

  const sayHello = () => {
    console.log('hello');
  }

  useSendCode('03');
</script>

<section>
  <h1>第三章 —— Props</h1>
  <Child name={name} on:sayHello={sayHello} />
</section>