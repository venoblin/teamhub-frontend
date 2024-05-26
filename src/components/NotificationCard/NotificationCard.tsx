import './NotificationCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { NotificationPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card/Card'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import PopUpMessage from '../PopUpMessage/PopUpMessage'

const NotificationCard = (props: NotificationPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [seen, toggleSeen] = useToggle(props.singleNotification.seen)

  const acceptHandler = async () => {
    try {
      console.log('accepting')
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in accepting!' />)
    }
  }

  const markAsReadHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.patchNotification(props.singleNotification, {seen: true}))
      toggleSeen()
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error marking as read!' />)
    }
  }

  const deleteHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.deleteNotification(props.singleNotification))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in deleting!' />)
    }
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
          <button onClick={acceptHandler} className='success'>Accept</button>
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