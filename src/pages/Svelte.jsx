import React from "react";
import { useReload } from '../utils';

function SveltePage() {
  // useReload();
  return (
    <div>
      <micro-app
        name="svelte"
        url="http://localhost:5003/"
        iframe
        baseroute="/svelte"
      ></micro-app>
    </div>
  );
}
export default SveltePage;
