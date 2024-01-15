import { useState } from 'react'
import { NotificationType } from '../types/notification'

const useUserNotification = (): [NotificationType[], React.Dispatch<React.SetStateAction<NotificationType[]>>] => {
  const [userNotification, setUserNotification] = useState<NotificationType[]>([])

  return [userNotification, setUserNotification]
}

export default useUserNotification