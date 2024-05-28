import { ProjectType } from "./project"
import { UserType } from "./user"

export interface NotificationPayloadType {
  notification: string,
  type: string,
  project_id: number | null,
  user_id: number,
  sender_id: number
}

export interface NotificationType extends NotificationPayloadType {
  id: number,
  seen: boolean,
  time: string,
  sender: UserType,
  project: ProjectType
}

export interface NotificationPatchType {
  notification?: string,
  type?: string,
  seen?: boolean
}