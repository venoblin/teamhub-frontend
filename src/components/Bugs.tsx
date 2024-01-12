import '../styles/Bugs.css'
import { SetProjectPropsType } from '../types/props'
import Panel from './ui/Panel'
import BugCard from './BugCard'
import { useState } from 'react'

const Bugs = (props: SetProjectPropsType) => {
  const [bugs, setBugs] = useState(props.project.bugs.filter(b => !b.completed))
  const [completedBugs, setCompletedBugs] = useState(props.project.bugs.filter(b => b.completed))
  
  return (
    <Panel className='bugs'>
      <h2>Bugs</h2>
      <div>
        {bugs.length ? (
          bugs.map(singleBug => (
            (!singleBug.completed && 
              <BugCard 
                key={String(singleBug.id)} 
                singleBug={singleBug} 
                project={props.project}
                setProject={props.setProject}
              />
            )
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>

      {completedBugs.length && (
        <div>
          <h2>Completed Bugs</h2>
        </div>
      )}
    </Panel>
  )
}

export default Bugs