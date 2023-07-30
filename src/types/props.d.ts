export interface ProjectProps extends Props {
  project: Project
}

export interface UiProps extends React.PropsWithChildren {
  className?: string,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}
