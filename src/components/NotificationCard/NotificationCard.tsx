import '../styles/NotificationCard.css'
import { useContext, useRef } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NotificationPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card'

const NotificationCard = (props: NotificationPropsType) => {
  const userContext = useContext(UserContext)
  const [seen, toggleSeen] = useToggle(props.singleNotification.seen)

  const markAsReadHandler = async () => {
    await userContext?.patchNotification(props.singleNotification, {seen: true})
    toggleSeen()
  }

  const deleteHandler = async () => {
    await userContext?.deleteNotification(props.singleNotification)
  }

  return (
    <Card className={!seen ? 'notification-card' : 'notification-card seen'}>
      <p>{props.singleNotification.notification}</p>
      <p>{props.singleNotification.time}</p>

      <div className='inputs'>
        {!seen && 
          <button onClick={markAsReadHandler}>Mark as read</button>
        }
        <button onClick={deleteHandler} className="danger">Delete</button>
      </div>
    </Card>
  )
}

export default NotificationCard