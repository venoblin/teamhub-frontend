import './styles/App.css'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Register from './components/routes/RegisterRoute/RegisterRoute'
import Login from './components/routes/LoginRoute/LoginRoute'
import Home from './components/routes/HomeRoute/HomeRoute'
import NewProject from './components/routes/NewProjectRoute/NewProjectRoute'
import Project from './components/routes/ProjectRoute/ProjectRoute'
import NotFound from './components/routes/NotFoundRoute/NotFoundRoute'
import Notifications from './components/routes/NotificationsRoute/NotificationsRoute'

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
            <Route path='/' element={<Home />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/projects/new' element={<NewProject />} />
            <Route path='/:username/:projectName/*' element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        )}
      </main>      
      
      <Footer />
    </div>
  )
}

export default App
