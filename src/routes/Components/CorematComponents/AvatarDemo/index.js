import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import AvatarContextProvider from './AvatarContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import AvatarView from './AvatarView'

const CmtAvatarDemo = () => {
  return (
    <AvatarContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <AvatarView />
      </CorematComponentDemo>
    </AvatarContextProvider>
  )
}

export default CmtAvatarDemo
