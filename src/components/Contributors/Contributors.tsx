import './Contributors.css'
import { SetProjectPropsType } from '../../types/props'
import AddContributors from '../AddContributors/AddContributors'
import useToggle from '../../hooks/useToggle'
import ButtonSwitch from '../ui/ButtonSwitch/ButtonSwitch'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'

const Contributors = (props: SetProjectPropsType & {isOwner: boolean}) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)

  const addContributorsHandler = () => {
    utilitiesContext?.showPopUp(<AddContributors project={props.project} setProject={props.setProject} />)
  }

  return (
    <div className='contributors'>
      Owner: {props.project.owner.username}
      
      {props.project.contributors.length ? (
          props.project.contributors.map((c) => (
            <p key={c.id}>
              {`${c.username} ${c.id === userContext?.user.id ? '(You)' : ''}`}
            </p>
          ))
        ) : (
          <p>No contributors!</p>
        )
      }

      {props.isOwner &&
        <button onClick={addContributorsHandler}>Add Contributors</button>
      }
    </div>
  )
}

export default Contributors