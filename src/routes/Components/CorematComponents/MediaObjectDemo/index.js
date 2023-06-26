import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import MediaObjectContextProvider from './MediaObjectContextProvider'
import MediaObjectView from './MediaObjectView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtMediaObjectDemo = () => {
  return (
    <MediaObjectContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <MediaObjectView />
      </CorematComponentDemo>
    </MediaObjectContextProvider>
  )
}

export default CmtMediaObjectDemo
