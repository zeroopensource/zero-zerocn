import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { StrictMode } from 'react'
// import { StrictMode } from 'hono/jsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
