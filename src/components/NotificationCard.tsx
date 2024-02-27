import '../styles/NotificationCard.css'
import { NotificationPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Card from './ui/Card'

const NotificationCard = (props: NotificationPropsType) => {
  const [seen, toggleSeen] = useToggle(props.singleNotification.seen)

  const classes = 
    seen ? 
    'notification-card seen' : 'notification-card'

  return (
    <Card className={classes}>
      <p>{props.singleNotification.notification}</p>
      <p>{props.singleNotification.time}</p>

      <div className='inputs'>

        <button>Mark as read</button>
        <button className="danger">Delete</button>
      </div>
    </Card>
  )
}

export default NotificationCard