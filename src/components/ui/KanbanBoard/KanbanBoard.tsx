import './KanbanBoard.css'
import { UiPropsType } from '../../../types/props'

const KanbanBoard = (props: UiPropsType) => {
  const classes: string = `kanban-board ${props.className ? props.className : ''}`
  
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default KanbanBoard