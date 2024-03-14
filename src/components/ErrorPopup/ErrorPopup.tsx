import './ErrorPopup.css'
import Panel from '../ui/Panel'
import { ErrorPopupProps } from '../../types/error'

const ErrorPopup = (props: ErrorPopupProps) => {

  const closeHandler = () => {
    props.onClose()
  }

  return (
    <Panel>
      <h2>{props.message}</h2>
      <button onClick={closeHandler}>Ok</button>
    </Panel>
  )
}

export default ErrorPopup