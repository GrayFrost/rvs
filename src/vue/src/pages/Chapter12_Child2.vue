<template>
  <div>
      <p>最外层text: {{text}}</p>
      <p>主题：{{theme}}</p>
      <button
        @click="setTheme('dark')"
        class="w-auto h-auto p-1 border"
      >
        Dark
      </button>
      <button
        @click="setTheme('light')"
        class="w-auto h-auto p-1 border"
      >
        Light
      </button>
    </div>
</template>

<script setup>
  import { inject } from 'vue';
  import { ContextKey } from './Chapter12.vue';

  const { text, theme, setTheme } = inject(ContextKey);
</script>