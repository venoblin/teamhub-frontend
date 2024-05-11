import './PupUpMessage.css'
import { PropsWithMessage } from '../../types/props'

const PopUpMessage = (props: PropsWithMessage) => {
  return (
    <p className='pop-up-msg'>{props.message}</p>
  )
}

export default PopUpMessage