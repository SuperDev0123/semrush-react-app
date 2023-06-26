import React from 'react'
import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import AvatarGroupContextProvider from './AvatarGroupContextProvider'
import AvatarGroupView from './AvatarGroupView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtAvatarGroupDemo = () => {
  return (
    <AvatarGroupContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <AvatarGroupView />
      </CorematComponentDemo>
    </AvatarGroupContextProvider>
  )
}

export default CmtAvatarGroupDemo
