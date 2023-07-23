import './styles/App.css'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import NavBar from './components/NavBar'
import Register from './components/routes/Register'
import Login from './components/routes/Login'
import Home from './components/routes/Home'
import Project from './components/routes/Project'

const App = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="app">
      <NavBar />
      {userContext?.authenticated ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects/:id' element={<Project />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      )}
            
    </div>
  )
}

export default App
