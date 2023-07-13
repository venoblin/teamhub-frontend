import { UiProps } from '../../react-app-env'
import '../../styles/Card.css'

const Card = (props: UiProps) => {
  return (
    <div className="card">{props.children}</div>
  )
}

export default Card