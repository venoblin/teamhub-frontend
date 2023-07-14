import '../../styles/Panel.css'
import { UiProps } from '../../react-app-env'
import Wrapper from './Wrapper'

const Panel = (props: UiProps) => {
  const classes: string = `panel${props.className ? props.className : ''}`
  
  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Panel