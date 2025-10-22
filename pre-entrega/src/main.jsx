import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ContextProvider } from './contexts/Context.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
)
