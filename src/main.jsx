import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MagicCounter from './component/MagicCounter'
import Timer from './component/Timer'
import ResponsiveBackground from './component/ResponsiveBackground'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MagicCounter />
    <Timer/>
    <ResponsiveBackground/>
  </StrictMode>,
)
