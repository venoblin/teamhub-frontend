import { useState } from 'react'
import '../styles/NotificationCard.css'
import { NotificationPropsType } from '../types/props'
import Card from './ui/Card'

const NotificationCard = (props: NotificationPropsType) => {
  const [classes, setClasses] = useState('notification-card')

  return (
    <Card className={classes}>
      <p>{props.singleNotification.notification}</p>
      <p>{props.singleNotification.time}</p>
    </Card>
  )
}

export default NotificationCard