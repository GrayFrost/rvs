<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let name;

  const onClickFunc = () => {
    dispatch('sayHello')
  }
</script>

<div>
  <span>name: {name}</span>
  <button on:click={onClickFunc}></button>
</div>