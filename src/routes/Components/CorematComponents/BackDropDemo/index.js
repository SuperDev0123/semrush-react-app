import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import BackDropContextProvider from './BackDropContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import BackDropView from './BackDropView'

const CmtBackDropDemo = () => {
  return (
    <BackDropContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <BackDropView />
      </CorematComponentDemo>
    </BackDropContextProvider>
  )
}

export default CmtBackDropDemo
