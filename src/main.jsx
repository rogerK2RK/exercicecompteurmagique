import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MagicCounter from './assets/component/MagicCounter'
import Timer from './assets/component/Timer'
import ResponsiveBackground from './assets/component/ResponsiveBackground'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MagicCounter />
    <Timer/>
    <ResponsiveBackground/>
  </StrictMode>,
)
