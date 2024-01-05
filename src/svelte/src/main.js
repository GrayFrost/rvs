import App from './App.svelte'
import './app.css'
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let app;

function render(container) {
  const target = new App({
    target: container,
  })
  app = target;
}


const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container } = props
      render(container)
    },
    bootstrap() {},
    unmount() {
      
    },
    update() {}
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(document.getElementById('root'));

export default app;
