import { PropsWithChildren } from 'react'
import './ButtonSwitch'

const ButtonSwitch = (props: PropsWithChildren) => {
  return (
    <button>{props.children}</button>
  )
}