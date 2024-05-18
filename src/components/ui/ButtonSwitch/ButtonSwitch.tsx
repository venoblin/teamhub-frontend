import './ButtonSwitch.css'
import useToggle from '../../../hooks/useToggle'
import { PropsWithChildren } from 'react'
import { UiPropsType } from '../../../types/props'

const ButtonSwitch = (props: UiPropsType) => {
  const [isClicked, toggleIsClicked] = useToggle()
  const classesBase: string = `btn-switch ${props.className ? props.className : ''}`
  const classes = `${isClicked ? 'sucess' : 'danger'} ${classesBase}`
  
  return (
    <button className={classes}>{props.children}</button>
  )
}