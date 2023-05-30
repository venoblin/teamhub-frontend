import './styles/App.css'
import NavBar from './components/NavBar'
import Home from './components/routes/Home'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <h1>Project manager</h1>
      <Home />
    </div>
  )
}

export default App;
