import { PropsWithChildren } from 'react'
import '../../styles/Wrapper.css'

const Wrapper = (props: PropsWithChildren<WrapperIdentifier>) => {
  return (
    <div className="Wrapper">{props.children}</div>
  )
}

export default Wrapper