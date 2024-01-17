import { useContext, useEffect } from 'react'
import '../../styles/Notifications.css'
import { UserContext } from '../../contexts/UserContext'
import NotificationCard from '../NotificationCard'
import useToggle from '../../hooks/useToggle'

const Notifications = () => {
  const userContext = useContext(UserContext)
  const [updated, toggleUpdated] = useToggle()

  const markAsReadHandler = () => {
    userContext?.userNotifications.forEach(async (n) => {
      await userContext.patchNotification(n.id, {seen: true})
    })
    toggleUpdated()
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