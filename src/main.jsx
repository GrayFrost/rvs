import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx'

import microApp from '@micro-zoe/micro-app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

microApp.start({
  'disable-memory-router': true, // 关闭虚拟路由系统
  'disable-patch-request': true, // 关闭对子应用请求的拦截
})
