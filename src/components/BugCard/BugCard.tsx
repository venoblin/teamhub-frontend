import './BugCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import { BugPropsType } from '../../types/props'
import useToggle from '../../hooks/useToggle'
import Card from '../ui/Card/Card'
import PopUpMessage from '../PopUpMessage/PopUpMessage'
import useFormState from '../../hooks/useFormState'
import { changeListen } from '../../utils/inputHandler'

const BugCard = (props: BugPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [isShown, toggleShown] = useToggle()
  const [editMode, toggleEditMode] = useToggle()
  const [formState, setFormState] = useFormState({
    bug: props.singleBug.bug,
    bug_info: props.singleBug.bug_info
  })

  const applyEditHandler = async () => {
    try {
      await userContext?.patchBug(
        props.project,
        props.singleBug,
        formState,
        props.setProject
      )
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in editing bug!' />)
    }
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
      {editMode ? (
          <div>
            <textarea 
              name='bug' 
              onChange={(evt) => changeListen(evt, formState, setFormState)}
              value={formState.bug}
            ></textarea>

            <textarea 
              name='bug_info' 
              onChange={(evt) => changeListen(evt, formState, setFormState)}
              value={formState.bug_info}
            ></textarea>
          </div>
        ) : (
          <div>
            <p>{props.singleBug.bug}</p>
            {isShown && 
              <p>{props.singleBug.bug_info}</p>
            }
          </div>
        )
      }
      

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