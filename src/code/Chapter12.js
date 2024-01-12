export const reactCode = 
`// grandson component
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const GrandSon = () => {
  const { text, theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>最外层text: {text}</p>
      <p>主题：{theme}</p>
      <button
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <button
        onClick={() => setTheme("light")}
      >
        Light
      </button>
    </div>
  );
};

// child component
const Child = () => {
  return <GrandSon />;
};

// father component
export default function Page() {
  const [text] = useState('hello world');
  const [theme, setTheme] = useState("dark");

  return (
    <section>
      <h1>第十二章 —— context</h1>
      <ThemeContext.Provider
        value={{
          text,
          theme,
          setTheme,
        }}
      >
        <Child />
      </ThemeContext.Provider>
    </section>
  );
}
`;

export const vueCode =
`// grandson component
<template>
  <div>
      <p>最外层text: {{text}}</p>
      <p>主题：{{theme}}</p>
      <button
        @click="setTheme('dark')"
      >
        Dark
      </button>
      <button
        @click="setTheme('light')"
      >
        Light
      </button>
    </div>
</template>

<script setup>
  import { inject } from 'vue';
  import { ContextKey } from './Father.vue';

  const { text, theme, setTheme } = inject(ContextKey);
</script>

// child component
<template>
  <GrandSon />
</template>

<script setup>
  import GrandSon from './Grandson.vue';
</script>

//father component
<template>
  <section>
    <h1>第十二章 —— context</h1>
    <Child />
  </section>
</template>

<script>
  export const ContextKey = 'ThemeContext';
</script>
<script setup>
  import { ref, provide } from 'vue'
  import Child from './Child.vue';

  const text = 'hello world';
  const theme = ref('dark');

  const setTheme = (newTheme) => {
    theme.value = newTheme;
  }

  provide(ContextKey, {
    text,
    theme,
    setTheme
  })
</script>
`;

export const svelteCode =
`// grandson component
<script>
  import { getContext } from "svelte";
  import { ContextKey } from "./Father.svelte";
  const { text, theme, setTheme } = getContext(ContextKey);
</script>

<div>
  <p>最外层text: {text}</p>
  <p>主题：{$theme}</p>
  <button on:click={() => setTheme("dark")}>
    Dark
  </button>
  <button on:click={() => setTheme("light")}>
    Light
  </button>
</div>

// child component
<script>
  import GrandSon from './Grandson.svelte';
</script>

<GrandSon />

// father component
<script context="module">
  export const ContextKey = 'ThemeContext'
</script>
<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Child from './Child.svelte';

  let text = 'hello world';
  let theme = writable('dark');

  const setTheme = (newTheme) => {
    $theme = newTheme
  }

  setContext(ContextKey, {
    text,
    theme,
    setTheme
  })
</script>

<section>
  <h1>第十二章 —— context</h1>
  <Child />
</section>
`;