import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

const app = createApp(App).use(router);
app.mount('#vue-app')

window.unmount = () => {
  app.unmount();
}
