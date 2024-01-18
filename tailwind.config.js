/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'react': '#61dafb',
        'vue': '#42b883',
        'svelte': '#ff4000',
        'solid': '#446b9e'
      }
    },
  },
  plugins: [],
}

