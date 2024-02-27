import { useContext, useEffect } from 'react'
import '../../styles/Notifications.css'
import { UserContext } from '../../contexts/UserContext'
import NotificationCard from '../NotificationCard'

const Notifications = () => {
  const userContext = useContext(UserContext)

  return (
    <div className='notifications'>
      <h2>Notifications</h2>
      {userContext?.userNotifications.length ? (
        userContext.userNotifications.map(singleNotification => (
          <NotificationCard 
            key={singleNotification.id}
            singleNotification={singleNotification}
          />
        ))
      ) : (
        <p>No notifications!</p>
      )}
    </div>
  )
}

export default Notifications