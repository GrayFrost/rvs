<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let name;

  const onClickFunc = () => {
    dispatch("sayHello");
  };
</script>

<div>
  <span>name: {name}</span>
  <button
    class="w-[120px] h-10 rounded-sm flex items-center justify-center border"
    on:click={onClickFunc}
  >调用父级方法</button>
</div>
