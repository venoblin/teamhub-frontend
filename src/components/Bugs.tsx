import '../styles/Bugs.css'
import { ProjectPropsType } from '../types/props'
import Panel from './ui/Panel'
import BugCard from './BugCard'

const Bugs = (props: ProjectPropsType) => {
  
  return (
    <Panel className='bugs'>
      <h2>Bugs</h2>
      <div>
        {props.project?.bugs.length ? (
          props.project?.bugs.map(singleBug => (
            <BugCard key={String(singleBug.id)} singleBug={singleBug} />
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>
    </Panel>
  )
}

export default Bugs