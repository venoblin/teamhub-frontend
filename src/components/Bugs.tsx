import '../styles/Bugs.css'
import { ProjectPropsType } from '../types/props'

const Bugs = (props: ProjectPropsType) => {
  return (
    <div className='bugs'>
      <h2>Bugs</h2>
      <div>
        {props.project?.bugs.length ? (
          props.project?.bugs.map(singleBug => (
            <div key={String(singleBug.id)}>
              <p className='bug'>{ singleBug.bug }</p>
              
              {singleBug.bug_info &&
                <p className='bug-info'>{ singleBug.bug_info }</p>
              }
            </div>
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>
    </div>
  )
}

export default Bugs