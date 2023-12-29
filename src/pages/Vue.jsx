import React from "react";

function VuePage() {
  return (
    <div>
      <micro-app
        name="vue-app"
        url="http://localhost:5002/"
        iframe
        baseroute="/vue/"
      ></micro-app>
    </div>
  );
}
export default VuePage;
