/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let dispose;
function renderFunc(container) {
  dispose = render(() => <App />, container);
};

const initQianKun = () => {
  renderWithQiankun({
    mount(props) {
      const { container, setGlobalState } = props;
      qiankunWindow.setGlobalState = setGlobalState;
      renderFunc(container ? container.querySelector('#root') : document.getElementById("root"));
    },
    bootstrap() {},
    unmount() {
      dispose();
    },
  });
};

qiankunWindow.__POWERED_BY_QIANKUN__
  ? initQianKun()
  : render(() => <App />, document.getElementById("root"));
