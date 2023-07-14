import '../../styles/Panel.css'
import { UiProps } from '../../react-app-env'

const Panel = (props: UiProps) => {
  const classes: string = `${props.className ? props.className : ''} wrapper`
  
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default Panel