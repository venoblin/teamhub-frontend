import './PopUpMessage.css'
import { PropsWithMessage } from '../../types/props'

const PopUpMessage = (props: PropsWithMessage) => {
  return (
    <p className='pop-up-msg'>{props.msg}</p>
  )
}

export default PopUpMessage