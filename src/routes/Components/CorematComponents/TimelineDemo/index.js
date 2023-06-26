import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import TimelineContextProvider from './TimelineContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import TimelineView from './TimelineView'

const CmtTimelineDemo = () => {
  return (
    <TimelineContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <TimelineView />
      </CorematComponentDemo>
    </TimelineContextProvider>
  )
}

export default CmtTimelineDemo
