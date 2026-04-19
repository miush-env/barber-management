import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { esES } from '@clerk/localizations'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider localization={esES}>
      <App />
    </ClerkProvider>
  </StrictMode>,
)
