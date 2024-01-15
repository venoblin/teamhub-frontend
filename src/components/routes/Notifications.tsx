import { useContext } from 'react'
import '../../styles/Notifications.css'
import { UserContext } from '../../contexts/UserContext'

const Notifications = () => {
  const userContext = useContext(UserContext)

  return (
    <div className='notifications'>
      <h2>Notifications</h2>
      {userContext?.userNotifications.length ? (
        <p>Notifications go here</p>
      ) : (
        <p>No notifications!</p>
      )}
    </div>
  )
}

export default Notifications