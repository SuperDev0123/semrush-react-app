import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import ListlContextProvider from './ListlContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import ListView from './ListView'

const CmtListDemo = () => {
  return (
    <ListlContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <ListView />
      </CorematComponentDemo>
    </ListlContextProvider>
  )
}

export default CmtListDemo
