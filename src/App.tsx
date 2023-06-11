import './styles/App.css'
import NavBar from './components/NavBar'
import Register from './components/routes/Register'
import Login from './components/routes/Login'
import Home from './components/routes/Home'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Project manager</h1>
      <Home />
      <Register />
      <Login />
    </div>
  )
}

export default App
