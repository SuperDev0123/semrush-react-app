import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import RevealCardContextProvider from './RevealCardContextProvider'
import RevealCardView from './RevealCardView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtRevealCardDemo = () => {
  return (
    <RevealCardContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <RevealCardView />
      </CorematComponentDemo>
    </RevealCardContextProvider>
  )
}

export default CmtRevealCardDemo
