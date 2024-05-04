import './BugCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { BugPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card/Card'

const BugCard = (props: BugPropsType) => {
  const userContext = useContext(UserContext)
  const [isShown, toggleShown] = useToggle()

  const clickHandler = () => {
    toggleShown()
  }

  const completeHandler =async () => {
    await userContext?.patchBug(
      props.project,
      props.singleBug,
      {completed: true},
      props.setProject
    )
  }

  const deleteHandler = async () => {
    await userContext?.deleteBug(
      props.project,
      props.singleBug.id,
      props.setProject
      )
  }
  
  return (
    <Card className='bug-todo-card bug-card'>
      <div>
        <p>{props.singleBug.bug}</p>
        {isShown && 
          <p>{props.singleBug.bug_info}</p>
        }
      </div>

      <div className='btns'>
        {props.singleBug.bug_info &&
          <button className='view-info-btn' onClick={clickHandler}>View Info</button>
        }
        {!props.singleBug.completed &&
          <div className='edit-btns'>
            <button>Edit</button>
            <button className='success' onClick={completeHandler}>Complete</button>
            <button className='danger' onClick={deleteHandler}>Delete</button>
          </div>
        }
      </div> 
    </Card>
  )
}

export default BugCard