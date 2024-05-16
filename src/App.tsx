import './styles/App.css'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import RegisterRouteHomeRoute from './components/routes/RegisterRoute/RegisterRoute'
import LoginRouteHomeRoute from './components/routes/LoginRoute/LoginRoute'
import HomeRoute from './components/routes/HomeRoute/HomeRoute'
import NewProjectRouteHomeRoute from './components/routes/NewProjectRoute/NewProjectRoute'
import ProjectRouteHomeRoute from './components/routes/ProjectRoute/ProjectRoute'
import NotFoundRouteHomeRoute from './components/routes/NotFoundRoute/NotFoundRoute'
import NotificationsRouteHomeRoute from './components/routes/NotificationsRoute/NotificationsRoute'

const App = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      
      <main>
        {userContext?.authenticated ? (
          <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='/notifications' element={<NotificationsRouteHomeRoute />} />
            <Route path='/projects/new' element={<NewProjectRouteHomeRoute />} />
            <Route path='/:username/:projectName/*' element={<ProjectRouteHomeRoute />} />
            <Route path='*' element={<NotFoundRouteHomeRoute />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<HomeRoute />} />
            <Route path='/login' element={<LoginRouteHomeRoute />} />
            <Route path='/register' element={<RegisterRouteHomeRoute />} />
            <Route path='*' element={<NotFoundRouteHomeRoute />} />
          </Routes>
        )}
      </main>      
      
      <Footer />
    </div>
  )
}

export default App
