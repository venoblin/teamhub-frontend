import '../../styles/Card.css'
import { UiProps } from '../../react-app-env'
import Wrapper from './Wrapper'

const Card = (props: UiProps) => {
  const classes: string = `${props.className ? props.className : ''} card`
  
  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Card