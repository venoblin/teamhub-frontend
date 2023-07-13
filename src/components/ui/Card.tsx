import '../../styles/Card.css'
import { UiProps } from '../../react-app-env'

const Card = (props: UiProps) => {
  return (
    <div className="card">{props.children}</div>
  )
}

export default Card