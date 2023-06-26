import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'
import ObjectSummaryContextProvider from './ObjectSummaryContextProvider'
import ObjectSummaryView from './ObjectSummaryView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtObjectSummaryDemo = () => {
  return (
    <ObjectSummaryContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <ObjectSummaryView />
      </CorematComponentDemo>
    </ObjectSummaryContextProvider>
  )
}

export default CmtObjectSummaryDemo
