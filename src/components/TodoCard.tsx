import '../styles/TodoCard.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { TodoPropsType } from '../types/props'
import Card from './ui/Card'

const TodoCard = (props: TodoPropsType) => {
  const userContext = useContext(UserContext)

  const deleteHandler = async () => {
    await userContext?.deleteTodo(
      props.project, 
      props.singleTodo.id,
      props.setProject
      )
  }

  return (
    <Card>
      <p>{props.singleTodo.todo}</p>
      
      <button onClick={deleteHandler}>DELETE</button>
    </Card>
  )
}

export default TodoCard