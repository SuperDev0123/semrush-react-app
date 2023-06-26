import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import NotificationContextProvider from './NotificationContextProvider'
import NotificationView from './NotificationView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtNotificationsDemo = () => {
  return (
    <NotificationContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <NotificationView />
      </CorematComponentDemo>
    </NotificationContextProvider>
  )
}

export default CmtNotificationsDemo
