import '../styles/TodoCard.css'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { TodoPropsType } from '../types/props'
import Card from './ui/Card'

const TodoCard = (props: TodoPropsType) => {
  const userContext = useContext(UserContext)

  const deleteHandler = async () => {
  }
  
  return (
    <Card>
      <p>{props.singleTodo.todo}</p>
      
      <button>DELETE</button>
    </Card>
  )
}

export default TodoCard