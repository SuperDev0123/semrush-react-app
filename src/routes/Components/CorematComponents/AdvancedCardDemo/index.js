import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import AdvCardContextProvider from './AdvCardContextProvider'
import AdvComponentView from './AdvComponentView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtAdvancedCardDemo = () => {
  return (
    <AdvCardContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <AdvComponentView />
      </CorematComponentDemo>
    </AdvCardContextProvider>
  )
}

export default CmtAdvancedCardDemo
