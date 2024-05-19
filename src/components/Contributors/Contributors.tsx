import './Contributors.css'
import { SetProjectPropsType } from '../../types/props'
import AddContributors from '../AddContributors/AddContributors'
import useToggle from '../../hooks/useToggle'
import ButtonSwitch from '../ui/ButtonSwitch/ButtonSwitch'

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

      <ButtonSwitch onClick={addCollaboratorsHandler}>Add Collaborators</ButtonSwitch>

      {isAddMode &&
        <AddContributors project={props.project} setProject={props.setProject} />
      }
    </div>
  )
}

export default Contributors