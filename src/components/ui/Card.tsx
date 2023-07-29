import '../../styles/Card.css'
import { UiProps } from '../../types/props'
import Wrapper from './Wrapper'

const Card = (props: UiProps) => {
  const classes: string = `card ${props.className ? props.className : ''}`
  
  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Card