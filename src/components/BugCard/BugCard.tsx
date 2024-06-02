import './BugCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import { BugPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card/Card'
import PopUpMessage from '../PopUpMessage/PopUpMessage'

const BugCard = (props: BugPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [isShown, toggleShown] = useToggle()
  const [editMode, toggleEditMode] = useToggle()

  const applyEditHandler = async () => {
    toggleEditMode()
  }

  const completeHandler =async () => {
    try {
      await utilitiesContext?.load(userContext?.patchBug(
        props.project,
        props.singleBug,
        {completed: true},
        props.setProject
      ))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in completing bug!' />)
    }
  }

  const deleteHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.deleteBug(
        props.project,
        props.singleBug.id,
        props.setProject
      ))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in deleting bug!' />)
    }
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
        {props.singleBug.bug_info && !editMode &&
          <button className='view-info-btn' onClick={() => toggleShown()}>
            {isShown ? 'Hide Info' : 'View Info'}
          </button>
        }
        {!props.singleBug.completed &&
          (editMode ? (
              <div className='edit-btns'>
                <button className='success' onClick={applyEditHandler}>Apply</button>
              </div>
            ) : (
              <div className='edit-btns'>
                <button onClick={() => toggleEditMode()}>Edit</button>
                <button className='success' onClick={completeHandler}>Complete</button>
                <button className='danger' onClick={deleteHandler}>Delete</button>
              </div>
            )
          )
        }
      </div> 
    </Card>
  )
}

export default BugCard