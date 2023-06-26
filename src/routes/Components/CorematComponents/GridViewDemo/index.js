import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import GridContextProvider from './GridContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import GridView from './GridView'

const CmtGridViewDemo = () => {
  return (
    <GridContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <GridView />
      </CorematComponentDemo>
    </GridContextProvider>
  )
}

export default CmtGridViewDemo
