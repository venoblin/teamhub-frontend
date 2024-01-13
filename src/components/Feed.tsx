import '../styles/Feed.css'
import { EventsPropsType } from '../types/props'
import EventCard from './EventCard'
import Panel from './ui/Panel'

const Feed = (props: EventsPropsType) => {
  return (
    <Panel className="feed">
      {props.events.length && (
        props.events.map(singleEvent => (
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
