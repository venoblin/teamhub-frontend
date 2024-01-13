import '../styles/Bugs.css'
import { SetProjectPropsType } from '../types/props'
import Panel from './ui/Panel'
import BugCard from './BugCard'
import { useState } from 'react'

const Bugs = (props: SetProjectPropsType) => {
  const bugs = props.project.bugs.filter(b => !b.completed)
  const completedBugs = props.project.bugs.filter(b => b.completed)

  
  return (
    <div className='bugs'>
      <Panel>
      <h2>Bugs</h2>
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
      </Panel>

      <Panel>
      <h2>Completed Bugs</h2>
        {completedBugs.length ? (
          completedBugs.map(singleBug => (
            <BugCard 
              key={String(singleBug.id)} 
              singleBug={singleBug} 
              project={props.project}
              setProject={props.setProject}
            />
          ))
        ) : (
          <p>No completed bugs!</p>
        )}
      </Panel>
    </div>
  )
}

export default Bugs