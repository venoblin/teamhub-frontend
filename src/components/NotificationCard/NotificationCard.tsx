import './NotificationCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NotificationPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card/Card'

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
      <p>From: {props.singleNotification.sender.username}</p>
      {props.singleNotification.project && 
        <p>Project: {props.singleNotification.project.name}</p>
      }
      <p>{props.singleNotification.notification}</p>

      <div className='inputs'>
        {props.singleNotification.project &&
          <button className='success'>Accept</button>
        }
        
        {!seen && 
          <button onClick={markAsReadHandler}>Mark as read</button>
        }
        <button onClick={deleteHandler} className="danger">Delete</button>
      </div>

      <p>{props.singleNotification.time}</p>
    </Card>
  )
}

export default NotificationCard