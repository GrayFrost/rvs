import { Router } from "@solidjs/router";
import { routes } from "./router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

function App() {
  return (
    <div className="text-solid">
      <Router base={qiankunWindow.__POWERED_BY_QIANKUN__ ? "/solid" : ""}>
        {routes}
      </Router>
    </div>
  );
}

export default App;
