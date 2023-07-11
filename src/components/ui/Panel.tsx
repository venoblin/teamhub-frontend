import '../../styles/Panel.css'
import { PropsWithChildren } from "react"

const Panel = (props: PropsWithChildren) => {
  return (
    <div className="panel">{props.children}</div>
  )
}

export default Panel