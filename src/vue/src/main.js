import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

import './style.css';

let app;

function render(container) {
  app = createApp(App);
  app.use(router);
  
  app.mount(container);
}

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      console.log('zzh container', props);
      render(props.container ? props.container.querySelector('#vue-app') : '#vue-app');
    },
    bootstrap() {},
    unmount() {
      app.unmount();
    }
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render('#vue-app');
