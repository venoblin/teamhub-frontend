import '../../styles/Wrapper.css'
import { UiProps } from '../../react-app-env'

const Wrapper = (props: UiProps) => {
  return (
    <div className="wrapper">{props.children}</div>
  )
}

export default Wrapper