import { PropsWithChildren } from "react"

const Card = (props: PropsWithChildren) => {
  return (
    <div className="card">{props.children}</div>
  )
}

export default Card