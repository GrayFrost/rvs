import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#vue-app')

window.unmount = () => {
  app.unmount();
}
