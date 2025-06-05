import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './context/contextModoOscuro.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>
)
