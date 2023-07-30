import './styles/App.css'
import { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import NavBar from './components/NavBar'
import Register from './components/routes/Register'
import Login from './components/routes/Login'
import Home from './components/routes/Home'
import NewProject from './components/routes/NewProject'
import Project from './components/routes/Project'
import NotFound from './components/routes/NotFound'

const App = () => {
  const userContext = useContext(UserContext)
  
  return (
    <div className="app">
      <NavBar />
      {userContext?.authenticated ? (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<NewProject />} />
          <Route path='/:username/:id' element={<Project />} />
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
    </div>
  )
}

export default App
