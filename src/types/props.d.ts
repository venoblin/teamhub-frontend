export interface ProjectPropsType extends Props {
  project: ProjectType
}

export interface ProjectLinkPropsType extends ProjectPropsType {
  owner: UserType
}

export interface UiPropsType extends React.PropsWithChildren {
  className?: string
}
