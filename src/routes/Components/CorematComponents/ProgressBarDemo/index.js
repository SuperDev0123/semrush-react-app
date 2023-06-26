import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import ProgressBarContextProvider from './ProgressBarContextProvider'
import ProgressBarView from './ProgressBarView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtProgressBarDemo = () => {
  return (
    <ProgressBarContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <ProgressBarView />
      </CorematComponentDemo>
    </ProgressBarContextProvider>
  )
}

export default CmtProgressBarDemo
