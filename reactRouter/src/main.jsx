import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import this after npm i react-router-dom to 
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* wrap App in Browser router sandwich */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
