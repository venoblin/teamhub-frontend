import './Bugs.css'
import { SetProjectPropsType } from '../../types/props'
import BugCard from '../BugCard/BugCard'
import KanbanBoard from '../ui/KanbanBoard/KanbanBoard'

const Bugs = (props: SetProjectPropsType) => {
  const bugs = props.project.bugs.filter(b => !b.completed)
  const completedBugs = props.project.bugs.filter(b => b.completed)

  return (
    <KanbanBoard className='bugs'>
      <div className='all-bugs'>
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
          <p className='muted-color'>No bugs!</p>
        )}
      </div>

      <div className='completed_bugs'>
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
          <p className='muted-color'>No completed bugs!</p>
        )}
      </div>
    </KanbanBoard>
  )
}

export default Bugs