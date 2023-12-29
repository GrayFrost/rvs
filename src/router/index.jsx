import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Home.jsx';
import ReactPage from '../pages/React.jsx';
import VuePage from '../pages/Vue.jsx';
import SveltePage from '../pages/Svelte.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: Home,
    children: [
      {
        path: 'react',
        element: ReactPage,
      },
      {
        path: 'vue',
        element: VuePage,
      },
      {
        path: 'svelte',
        element: SveltePage,
      }
    ]
  }
])