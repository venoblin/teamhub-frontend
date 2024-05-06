import './styles/index.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './contexts/UserContext'
import { PopUpProvider } from './contexts/PopUpContext'
import { LoaderProvider } from './contexts/LoaderContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PopUpProvider>
        <LoaderProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </LoaderProvider>
      </PopUpProvider>
    </BrowserRouter>
  </React.StrictMode>
)