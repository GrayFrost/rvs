import React from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ReactPage from './pages/React';
import VuePage from './pages/Vue';
import SveltePage from "./pages/Svelte";

function App() {
  return (
    <div className="rvs flex">
      <div className="sidebar"></div>
      <div className="content">
        <div className="tab flex">
          <div>
            <Link to="/react">react</Link>
          </div>
          <div>
            <Link to="/vue">vue</Link>
          </div>
          <div>
            <Link to="/svelte">svelte</Link>
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/">
              <Route path="react" element={<ReactPage />} />
              <Route path="vue" element={<VuePage />} />
              <Route path="svelte" element={<SveltePage />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
