import './ErrorPopup.css'
import Panel from '../ui/Panel'
import { ErrorPopupProps } from '../../types/error'

const ErrorPopup = (props: ErrorPopupProps) => {

  const closeHandler = () => {
    props.onClose()
  }

  return (
    <Panel className='error-pop-up'>
      <Panel className='error'>
        <p>{props.message}</p>
        <button onClick={closeHandler}>Ok</button>
      </Panel>
    </Panel>
  )
}

export default ErrorPopup