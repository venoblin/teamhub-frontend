import 'EventCard.css'
import { EventPropsType } from '../../types/props'
import Card from '../ui/Card'

const EventCard = (props: EventPropsType) => {
  return (
    <Card className='event-card'>
      <p>{props.singleEvent.event}</p>
      <p>{props.singleEvent.time}</p>
    </Card>
  )
}

export default EventCard