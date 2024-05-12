import './TodoCard.css'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { TodoPropsType } from '../../types/props'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import PopUpMessage from '../PopUpMessage/PopUpMessage'
import Card from '../ui/Card/Card'

const TodoCard = (props: TodoPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)

  const completeHandler = async () => {
    try {
      await userContext?.patchTodo(
        props.project,
        props.singleTodo,
        {completed: true},
        props.setProject
      )
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in completing todo!' />)
    }
  }
  
  const deleteHandler = async () => {
    try {
      await userContext?.deleteTodo(
        props.project, 
        props.singleTodo.id,
        props.setProject
      )
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in deleting todo!' />)
    } 
  }

  return (
    <Card className='bug-todo-card todo-card'>
      <p>{props.singleTodo.todo}</p>
      
      {!props.singleTodo.completed && 
        <div className='btns'>
          <div className='edit-btns'>
            <button>Edit</button>
            <button className='success' onClick={completeHandler}>Complete</button>
            <button className='danger' onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      }
    </Card>
  )
}

export default TodoCard