import '../styles/NotificationCard.css'
import { NotificationPropsType } from '../types/props'
import Card from './ui/Card'

const NotificationCard = (props: NotificationPropsType) => {
  return (
    <Card className='notification-card'>
      <p>{props.singleNotification.notification}</p>
      <p>{props.singleNotification.time}</p>
    </Card>
  )
}

export default NotificationCard