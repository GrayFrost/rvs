import React from "react";
import { useReload } from '../utils';

function VuePage() {
  useReload();
  return (
    <div>
      <micro-app
        name="vue"
        url="http://localhost:5002/"
        iframe
        baseroute="/vue"
      ></micro-app>
    </div>
  );
}
export default VuePage;
