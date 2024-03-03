import './Panel.css'
import { UiPropsType } from '../../types/props'
import Wrapper from './Wrapper'

const Panel = (props: UiPropsType) => {
  const classes: string = `panel ${props.className ? props.className : ''}`
  
  return (
    <Wrapper className={classes}>{props.children}</Wrapper>
  )
}

export default Panel