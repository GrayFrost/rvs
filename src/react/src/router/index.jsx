import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Chapter01 from "../pages/Chapter01.jsx";
import Chapter02 from "../pages/Chapter02.jsx";
import Chapter03 from "../pages/Chapter03.jsx";
import Chapter04 from "../pages/Chapter04.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/chapter01",
        Component: Chapter01,
      },
      {
        path: "/chapter02",
        Component: Chapter02,
      },
      {
        path: "/chapter03",
        Component: Chapter03,
      },
      {
        path: "/chapter04",
        Component: Chapter04,
      }
    ],
  },
], {
  basename: window.__MICRO_APP_BASE_ROUTE__
});
