import './styles/index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './contexts/UserContext'
import { UtilitiesProvider } from './contexts/UtilitiesContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <UtilitiesProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </UtilitiesProvider>
    </BrowserRouter>
  </React.StrictMode>
)