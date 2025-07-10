import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ListaConScrollInfinito from './ListaConScrollInfinito'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="flex items-center justify-center h-screen" />
    {/* <ListaConScrollInfinito /> */}
  </React.StrictMode>
)
