import '../styles/TodoCard.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { TodoPropsType } from '../types/props'
import Card from './ui/Card'

const TodoCard = (props: TodoPropsType) => {
  const userContext = useContext(UserContext)

  const completeHandler = async () => {

  }
  
  const deleteHandler = async () => {
    await userContext?.deleteTodo(
      props.project, 
      props.singleTodo.id,
      props.setProject
      )
  }

  return (
    <Card className='bug-todo-card'>
      <p>{props.singleTodo.todo}</p>
      
      <button className='success' onClick={completeHandler}>Complete</button>
      <button className='danger' onClick={deleteHandler}>Delete</button>
    </Card>
  )
}

export default TodoCard