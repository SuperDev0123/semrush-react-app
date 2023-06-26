import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import ButtonsContextProvider from './ButtonsContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import ButtonsView from './ButtonsView'

const CmtButtonsDemo = () => {
  return (
    <ButtonsContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <ButtonsView />
      </CorematComponentDemo>
    </ButtonsContextProvider>
  )
}

export default CmtButtonsDemo
