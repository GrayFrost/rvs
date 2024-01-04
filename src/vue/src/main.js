import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

import './style.css';

const app = createApp(App).use(router);
let container;
function render(containerId) {
  container = containerId;
  app.mount(container);
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      render('#root');
    },
    bootstrap() {},
    unmount() {
      app.unmount(container);
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render('#vue-app');
