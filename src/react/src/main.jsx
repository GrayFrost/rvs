import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('react-app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// window.unmount = () => {
//   root.unmount();
// }