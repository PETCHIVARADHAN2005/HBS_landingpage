import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
const link=document.createElement('link')
link.rel='stylesheet'
link.href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
document.head.appendChild(link)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
