import 'Feed.css'
import { FeedPropsType } from '../../types/props'
import EventCard from '../EventCard/EventCard'
import Panel from '../ui/Panel'

const Feed = (props: FeedPropsType) => {
  const events = [...props.events]

  return (
    <div>
    {props.isNotPanel ? (
      <div className="feed">
        <h2>Project Feed</h2>
        {events.length && (
          events.reverse().map(singleEvent => (
            <EventCard 
              key={singleEvent.id}
              singleEvent={singleEvent}
            />
          ))
        )}
      </div>
    ) : (
      <Panel className="feed">
        <h2>Project Feed</h2>
        {events.length && (
          events.reverse().map(singleEvent => (
            <EventCard 
              key={singleEvent.id}
              singleEvent={singleEvent}
            />
          ))
        )}
      </Panel>
    )}
    
    </div>
  )
}

export default Feed
