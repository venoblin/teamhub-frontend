import './Contributors.css'
import { UserContext } from '../../contexts/UserContext'
import { useContext } from 'react'
import { SetProjectPropsType } from '../../types/props'

const Contributors = (props: SetProjectPropsType) => {
  const userContext = useContext(UserContext)
  const projectLink = `/${userContext?.user.username}/${props.project?.name}`

  return (
    <div className='contributors'>
      {props.project.contributors.length ? (
          props.project.contributors.map((c) => (
            <p>{c.user_id}</p>
          ))
        ) : (
          <p>No contributors!</p>
        )}
    </div>
  )
}

export default Contributors