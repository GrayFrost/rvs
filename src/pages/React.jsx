import React, { useEffect } from 'react';
import { useReload } from '../utils';

function ReactPage() {
  // useReload();
  return (
    <div>
      <micro-app
        name="react"
        url="http://localhost:5001/"
        iframe
        baseroute="/react"
      ></micro-app>
    </div>
  );
};
export default ReactPage;
