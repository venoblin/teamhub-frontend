import './Contributors.css'
import { SetProjectPropsType } from '../../types/props'
import AddContributors from '../AddContributors/AddContributors'
import useToggle from '../../hooks/useToggle'

const Contributors = (props: SetProjectPropsType) => {
  const [isAddMode, toggleIsAddMode] = useToggle()

  const addCollaboratorsHandler = () => {
    toggleIsAddMode()
  }

  return (
    <div className='contributors'>
      {props.project.contributors.length ? (
          props.project.contributors.map((c) => (
            <p>{c.user_id}</p>
          ))
        ) : (
          <p>No contributors!</p>
        )
      }

      <button onClick={addCollaboratorsHandler}>Add Collaborators</button>

      {isAddMode &&
        <AddContributors project={props.project} setProject={props.setProject} />
      }
    </div>
  )
}

export default Contributors