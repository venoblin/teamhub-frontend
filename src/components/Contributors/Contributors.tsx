import './Contributors.css'
import { SetProjectPropsType } from '../../types/props'
import AddContributors from '../AddContributors/AddContributors'
import useToggle from '../../hooks/useToggle'
import ButtonSwitch from '../ui/ButtonSwitch/ButtonSwitch'

const Contributors = (props: SetProjectPropsType & {isOwner: boolean}) => {
  const [isAddMode, toggleIsAddMode] = useToggle()

  const addContributorsHandler = () => {
    toggleIsAddMode()
  }

  return (
    <div className='contributors'>
      Owner: {props.project.owner.username}
      
      {props.project.contributors.length ? (
          props.project.contributors.map((c) => (
            <p key={c.id}>{c.username}</p>
          ))
        ) : (
          <p>No contributors!</p>
        )
      }

      {props.isOwner &&
        <ButtonSwitch onClick={addContributorsHandler}>Add Contributors</ButtonSwitch>
      }

      {isAddMode &&
        <AddContributors project={props.project} setProject={props.setProject} />
      }
    </div>
  )
}

export default Contributors