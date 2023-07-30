import { PropsWithChildren, MouseEvent } from 'react'

export interface ProjectProps extends Props {
  project: Project
}

export interface UiProps extends PropsWithChildren {
  className?: string,
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}
