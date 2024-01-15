import { ProjectType } from "./project"
import { UserType } from "./user"

export interface ContributorPayloadType {
  user_id: number,
  project_id: number
}

export interface ContributorType extends ContributorPayloadType {
  id: number,
  user: UserType
}

export interface ContributionPayloadType extends ContributorType {}

export interface ContributionType extends ContributorPayloadType {
  id: number,
  project: ProjectType
}