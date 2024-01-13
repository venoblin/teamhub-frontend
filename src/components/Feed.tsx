import '../styles/Feed.css'
import { EventsPropsType } from '../types/props'
import EventCard from './EventCard'
import Panel from './ui/Panel'

const Feed = (props: EventsPropsType) => {
  const events = [...props.events]

  return (
    <Panel className="feed">
      {events.length && (
        events.reverse().map(singleEvent => (
          <EventCard 
            key={singleEvent.id}
            singleEvent={singleEvent}
          />
        ))
      )}
    </Panel> 

  )
}

export default Feed
