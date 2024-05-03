import './PopUp.css'
import Panel from '../ui/Panel'
import { PopUpProps } from '../../types/popup'

const ErrorPopup = (props: PopUpProps) => {

  const closeHandler = () => {
    props.onClose()
  }

  return (
    <Panel className='pop-up'>
      <Panel className='inner-panel'>
        <p>{props.message}</p>
        <button onClick={closeHandler}>Ok</button>
      </Panel>
    </Panel>
  )
}

export default ErrorPopup