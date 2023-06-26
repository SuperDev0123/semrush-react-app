import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import DrawerContextProvider from './DrawerContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import DrawerView from './DrawerView'

const CmtDrawerDemo = () => {
  return (
    <DrawerContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <DrawerView />
      </CorematComponentDemo>
    </DrawerContextProvider>
  )
}

export default CmtDrawerDemo
