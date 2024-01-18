import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../Layout.jsx';

import ReactPage from '../pages/React.jsx';
import VuePage from '../pages/Vue.jsx';
import SveltePage from '../pages/Svelte.jsx';
import SolidPage from '../pages/Solid.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'react/:chapter',
        Component: ReactPage,
        index: true
      },
      {
        path: 'vue/:chapter',
        Component: VuePage,
      },
      {
        path: 'svelte/:chapter',
        Component: SveltePage,
      },
      {
        path: 'solid/:chapter',
        Component: SolidPage,
      }
    ]
  },
])