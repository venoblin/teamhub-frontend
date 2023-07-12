import '../../styles/Wrapper.css'
import { PropsWithChildren } from "react"

const Wrapper = (props: PropsWithChildren) => {
  return (
    <div className="wrapper">{props.children}</div>
  )
}

export default Wrapper