import { UiProps } from '../../react-app-env'
import '../../styles/Wrapper.css'

const Wrapper = (props: UiProps) => {
  return (
    <div className="wrapper">{props.children}</div>
  )
}

export default Wrapper