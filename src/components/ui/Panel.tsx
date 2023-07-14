import '../../styles/Panel.css'
import { UiProps } from '../../react-app-env'
import Wrapper from './Wrapper'

const Panel = (props: UiProps) => {
  const classes: string = `${props.className ? props.className : ''} panel`
  
  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Panel