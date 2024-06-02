import './TodoCard.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { TodoPropsType } from '../../types/props'
import { UtilitiesContext } from '../../contexts/UtilitiesContext'
import PopUpMessage from '../PopUpMessage/PopUpMessage'
import Card from '../ui/Card/Card'
import useToggle from '../../hooks/useToggle'
import { changeListen } from '../../utils/inputHandler'
import useFormState from '../../hooks/useFormState'

const TodoCard = (props: TodoPropsType) => {
  const userContext = useContext(UserContext)
  const utilitiesContext = useContext(UtilitiesContext)
  const [formState, setFormState] = useFormState({
    todo: props.singleTodo.todo
  })
  const [editMode, toggleEditMode] = useToggle()

  const applyEditHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.patchTodo(
        props.project,
        props.singleTodo,
        formState,
        props.setProject
      ))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in editing todo!' />)
    }
    toggleEditMode()
  }

  const completeHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.patchTodo(
        props.project,
        props.singleTodo,
        {completed: true},
        props.setProject
      ))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in completing todo!' />)
    }
  }
  
  const deleteHandler = async () => {
    try {
      await utilitiesContext?.load(userContext?.deleteTodo(
        props.project, 
        props.singleTodo.id,
        props.setProject
      ))
    } catch {
      utilitiesContext?.showPopUp(<PopUpMessage msg='Error in deleting todo!' />)
    } 
  }

  return (
    <Card className='bug-todo-card todo-card'>
      {editMode ? (
          <textarea 
            name='todo'
            onChange={(evt) => changeListen(evt, formState, setFormState)} 
            value={formState.todo}
          ></textarea>
        ) : (
          <p>{props.singleTodo.todo}</p>
        )
      }
      
      {!props.singleTodo.completed && 
        <div className='btns'>
            {editMode ? (
                <div className='edit-btns'>
                  <button onClick={applyEditHandler} className='success'>Apply</button>
                </div>
              ) : (
                <div className='edit-btns'>
                  <button onClick={() => toggleEditMode()}>Edit</button>
                  <button className='success' onClick={completeHandler}>Complete</button>
                  <button className='danger' onClick={deleteHandler}>Delete</button>
                </div>
              )
            }
            
        </div>
      }
    </Card>
  )
}

export default TodoCard