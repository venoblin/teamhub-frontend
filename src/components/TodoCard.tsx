import '../styles/TodoCard.css'
import { TodoPropsType } from '../types/props'
import Card from './ui/Card'

const TodoCard = (props: TodoPropsType) => {
  return (
    <Card>{props.singleTodo.todo}</Card>
  )
}

export default TodoCard