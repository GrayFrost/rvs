import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import OnePage from "../pages/One.jsx";
import TwoPage from "../pages/Two.jsx";
import ThreePage from "../pages/Three.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/one",
        Component: OnePage,
      },
      {
        path: "/two",
        Component: TwoPage,
      },
      {
        path: "/three",
        Component: ThreePage,
      },
    ],
  },
], {
  basename: window.__MICRO_APP_BASE_ROUTE__
});
