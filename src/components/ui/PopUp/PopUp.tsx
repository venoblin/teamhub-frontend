import './PopUp.css'
import { UiPropsType } from '../../../types/props'

const PopUp = (props: UiPropsType) => {
  const classes: string = `${props.className ? props.className : ''} pop-up`
  
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default PopUp