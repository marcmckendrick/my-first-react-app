import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greeting.jsx'
import Component2 from './Component2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
  </StrictMode>,
)
