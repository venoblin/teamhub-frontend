export interface NotificationPayloadType {
  notification: string,
  type: string,
  project_id: number | null
}

export interface NotificationType extends NotificationPayloadType {
  id: number,
  seen: boolean,
  time: string
}

export interface NotificationPatchType {
  notification?: string,
  type?: string,
  seen?: boolean
}