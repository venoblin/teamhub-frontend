import '../styles/BugCard.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { BugPropsType } from '../types/props'
import useToggle from '../hooks/useToggle'
import Card from './ui/Card'

const BugCard = (props: BugPropsType) => {
  const userContext = useContext(UserContext)
  const [isShown, toggleShown] = useToggle()

  const clickHandler = () => {
    toggleShown()
  }

  const deleteHandler = async () => {
    await userContext?.deleteBug(
      props.project,
      props.singleBug.id,
      props.setProject
      )
  }
  
  return (
    <Card>
      <p>{props.singleBug.bug}</p>

      {props.singleBug.bug_info &&
        <div className='bug-info'>
          <button onClick={clickHandler}>View bug info</button>

          {isShown && 
            <p>{props.singleBug.bug_info}</p>
          }
        </div>
      }

      <button onClick={deleteHandler}>DELETE</button>
    </Card>
  )
}

export default BugCard