import '../../styles/NotFound.css'
import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const NotFound = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <div className='not-found'>
      <h1>404 Not Found!</h1>
    </div>
  )
}

export default NotFound