import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from '../Layout.jsx';
import ReactPage from '../pages/React.jsx';
import VuePage from '../pages/Vue.jsx';
import SveltePage from '../pages/Svelte.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'react/:chapter',
        Component: ReactPage,
      },
      {
        path: 'vue/:chapter',
        Component: VuePage,
      },
      {
        path: 'svelte/:chapter',
        Component: SveltePage,
      }
    ]
  }
])