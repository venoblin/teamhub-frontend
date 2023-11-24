import '../styles/Bugs.css'
import { SetProjectPropsType } from '../types/props'
import Panel from './ui/Panel'
import BugCard from './BugCard'

const Bugs = (props: SetProjectPropsType) => {
  
  return (
    <Panel className='bugs'>
      <h2>Bugs</h2>
      <div>
        {props.project?.bugs.length ? (
          props.project?.bugs.map(singleBug => (
            <BugCard 
              key={String(singleBug.id)} 
              singleBug={singleBug} 
              project={props.project}
              setProject={props.setProject}
              />
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>
    </Panel>
  )
}

export default Bugs