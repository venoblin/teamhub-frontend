import '../../styles/Wrapper.css'
import { UiProps } from '../../@types/ui'

const Wrapper = (props: UiProps) => {
  const classes: string = `${props.className ? props.className : ''} wrapper`
  
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Wrapper