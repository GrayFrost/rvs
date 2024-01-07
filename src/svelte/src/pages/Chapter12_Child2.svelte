<script>
  import { getContext } from "svelte";
  import { ContextKey } from "./Chapter12.svelte";
  const { text, theme, setTheme } = getContext(ContextKey);
</script>

<div>
  <p>最外层text: {text}</p>
  <p>主题：{$theme}</p>
  <button on:click={() => setTheme("dark")} class="w-auto h-auto p-1 border">
    Dark
  </button><button
    on:click={() => setTheme("light")}
    class="w-auto h-auto p-1 border"
  >
    Light
  </button>
</div>
