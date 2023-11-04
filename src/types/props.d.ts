export interface ProjectPropsType extends Props {
  project: ProjectType
}

export interface UiPropsType extends React.PropsWithChildren {
  className?: string
}

export interface ProjectLinkPropsType {
  project: ProjectType,
  owner: UserType
}