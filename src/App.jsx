import React from "react";
import "./App.css";
import {
  Await,
  createBrowserRouter,
  defer,
  Form,
  Link,
  Outlet,
  RouterProvider,
  useAsyncError,
  useAsyncValue,
  useFetcher,
  useFetchers,
  useLoaderData,
  useNavigation,
  useParams,
  useRevalidator,
  useRouteError,
} from "react-router-dom";
import { router } from './router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
