import { useContext, useEffect } from 'react'
import '../../styles/Notifications.css'
import { UserContext } from '../../contexts/UserContext'
import NotificationCard from '../NotificationCard'

const Notifications = () => {
  const userContext = useContext(UserContext)

  const markAsReadHandler = async () => {
    if (userContext) {
      for (let n of userContext?.userNotifications) {
        await userContext?.patchNotification(n.id, {seen: !n.seen})
      }
    }
  }

  return (
    <div className='notifications'>
      <h2>Notifications</h2>
      <button onClick={markAsReadHandler}>Mark all as read</button>
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