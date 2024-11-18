import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MagicCounter from './assets/component/MagicCounter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MagicCounter />
  </StrictMode>,
)
