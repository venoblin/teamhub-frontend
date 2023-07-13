import '../../styles/Panel.css'
import { UiProps } from '../../react-app-env'

const Panel = (props: UiProps) => {
  return (
    <div className="panel">{props.children}</div>
  )
}

export default Panel