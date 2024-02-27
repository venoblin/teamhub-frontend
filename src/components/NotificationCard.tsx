import '../styles/NotificationCard.css'
import { NotificationPropsType } from '../types/props'
import Card from './ui/Card'

const NotificationCard = (props: NotificationPropsType) => {
  const classes = 
    props.singleNotification.seen ? 
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