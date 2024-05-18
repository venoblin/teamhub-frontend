import './Contributors.css'
import { SetProjectPropsType } from '../../types/props'

const Contributors = (props: SetProjectPropsType) => {

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
    </div>
  )
}

export default Contributors