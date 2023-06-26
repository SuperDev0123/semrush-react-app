import React from 'react'

import { NotificationsContext } from './index'
import { useNotifications } from './hooks'

import { NotificationsLayout } from '@src/common/components'

const NotificationsProvider = ({ children }) => {
  const providerProps = useNotifications()

  return (
    <NotificationsContext.Provider value={providerProps}>
      <NotificationsLayout>{children}</NotificationsLayout>
    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider
