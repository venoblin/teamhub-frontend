import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Register from './components/routes/Register'
import Login from './components/routes/Login'
import Home from './components/routes/Home'
import Project from './components/routes/Project'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects/:id' element={<Project />} />
      </Routes>      
    </div>
  )
}

export default App
