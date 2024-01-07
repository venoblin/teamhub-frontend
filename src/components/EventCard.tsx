import '../styles/EventCard.css'
import { EventPropsType } from '../types/props'
import Card from './ui/Card'

const EventCard = (props: EventPropsType) => {
  return (
    <Card>
      <p>{props.singleEvent.event}</p>
    </Card>
  )
}

export default EventCard