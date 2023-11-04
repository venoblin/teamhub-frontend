import '../styles/Bugs.css'
import { ProjectPropsType } from '../types/props'

const Bugs = (props: ProjectPropsType) => {
  return (
    <div className='bugs'>
      <h2>Bugs</h2>
      <div>
        {props.project.bugs.length ? (
          props.project.bugs.map(bug => (
            <p>{ bug.bug }</p>
          ))
        ) : (
          <p>No bugs!</p>
        )}
      </div>
    </div>
  )
}

export default Bugs