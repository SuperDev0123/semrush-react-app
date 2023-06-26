import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useNotifications = () => {
  const [notifications, setNotifications] = useState([])

  const addNotification = (notificationItem) => {
    setNotifications((prevState) => [
      ...prevState,
      {
        id: uuidv4(),
        ...notificationItem,
      },
    ])
  }

  const removeNotification = (id) =>
    setNotifications((prevState) =>
      prevState.filter((notificationItem) => notificationItem.id !== id)
    )
  const removeAllNotifications = () => setNotifications([])

  return {
    notifications,
    setNotifications,
    addNotification,
    removeNotification,
    removeAllNotifications,
  }
}

export default useNotifications
