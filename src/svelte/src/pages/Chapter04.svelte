<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";
  import { useSendCode } from "../hooks/useSendCode";

  onMount(() => {
    console.log("onMount");
  });

  beforeUpdate(() => {
    console.log("beforeUpdate");
  });

  afterUpdate(() => {
    console.log("afterUpdate");
  });

  onDestroy(() => {
    console.log("onDestroy");
  });

  useSendCode('04');
</script>

<section>
  <h1>第四章 —— 生命周期</h1>
</section>
