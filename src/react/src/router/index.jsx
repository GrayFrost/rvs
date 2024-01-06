import { createBrowserRouter } from "react-router-dom";
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper'

import Layout from "../Layout.jsx";
import Chapter01 from "../pages/Chapter01.jsx";
import Chapter02 from "../pages/Chapter02.jsx";
import Chapter03 from "../pages/Chapter03.jsx";
import Chapter04 from "../pages/Chapter04.jsx";
import Chapter05 from "../pages/Chapter05.jsx";
import Chapter06 from "../pages/Chapter06.jsx";
import Chapter07 from "../pages/Chapter07.jsx";
import Chapter08 from "../pages/Chapter08.jsx";
import Chapter09 from "../pages/Chapter09.jsx";
import Chapter10 from "../pages/Chapter10.jsx";


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
      },
      {
        path: "/chapter05",
        Component: Chapter05
      },
      {
        path: "/chapter06",
        Component: Chapter06,
      },
      {
        path: "/chapter07",
        Component: Chapter07,
      },
      {
        path: "/chapter08",
        Component: Chapter08,
      },
      {
        path: "/chapter09",
        Component: Chapter09,
      },
      {
        path: "/chapter10",
        Component: Chapter10
      },
    ],
  },
], {
  basename: qiankunWindow.__POWERED_BY_QIANKUN__ ? '/react' : ''
});
