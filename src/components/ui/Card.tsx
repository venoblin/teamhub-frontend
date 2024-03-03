import 'Card.css'
import { UiPropsType } from '../../types/props'
import Wrapper from './Wrapper'

const Card = (props: UiPropsType) => {
  const classes: string = `card ${props.className ? props.className : ''}`

  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Card