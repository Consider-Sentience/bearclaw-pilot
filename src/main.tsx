import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'cs-design-system/tokens.css'
import 'cs-design-system/nav-link.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
