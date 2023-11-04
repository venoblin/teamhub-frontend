import '../../styles/Wrapper.css'
import { UiPropsType } from '../../types/props'

const Wrapper = (props: UiPropsType) => {
  const classes: string = `${props.className ? props.className : ''} wrapper`
  
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Wrapper