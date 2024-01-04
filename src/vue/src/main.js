import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import './style.css';

const app = createApp(App).use(router);
app.mount('#vue-app')

// window.unmount = () => {
//   app.unmount();
// }
