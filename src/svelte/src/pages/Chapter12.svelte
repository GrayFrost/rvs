<script context="module">
  export const ContextKey = 'ThemeContext'
</script>
<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { useSendCode } from '../hooks/useSendCode';
  import Child from './Chapter12_Child1.svelte';

  let text = 'hello world';
  let theme = writable('dark');

  const setTheme = (newTheme) => {
    $theme = newTheme
  }

  setContext(ContextKey, {
    text,
    theme,
    setTheme
  });

  useSendCode('12');
</script>

<section>
  <h1>第十二章 —— context</h1>
  <Child />
</section>