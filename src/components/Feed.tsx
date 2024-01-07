import '../styles/Feed.css'
import { EventPropsType, SetProjectPropsType } from '../types/props'
import EventCard from './EventCard'
import Panel from './ui/Panel'

const Feed = (props: SetProjectPropsType) => {
  return (
    <Panel className="feed">
      {props.project.events.map(singleEvent => (
        <EventCard 
          key={singleEvent.id}
          singleEvent={singleEvent}
          project={props.project}
        />
      ))}
    </Panel>
  )
}

export default Feed
