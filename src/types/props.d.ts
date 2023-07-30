import { Project } from "./project"

export interface ProjectProps extends Props {
  project: Project
}

export interface UiProps extends React.PropsWithChildren {
  className?: string
}

export interface ProjectLinkProps {
  project: Project
}