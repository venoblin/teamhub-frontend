/// <reference types="react-scripts" />

import { ReactNode } from "react"

type Payload = {
  email: string,
  password: string
}

type UiProps = {
  children: ReactNode,
  className?: string = ''
}