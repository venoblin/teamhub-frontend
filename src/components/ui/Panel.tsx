import { UiProps } from '../../react-app-env'
import '../../styles/Panel.css'

const Panel = (props: UiProps) => {
  return (
    <div className="panel">{props.children}</div>
  )
}

export default Panel