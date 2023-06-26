import React from 'react'
import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import ExpendableCardContextProvider from './ExpendableCardContextProvider'
import ExpendableCardView from './ExpendableCardView'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'

const CmtExpendableCardDemo = () => {
  return (
    <ExpendableCardContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <ExpendableCardView />
      </CorematComponentDemo>
    </ExpendableCardContextProvider>
  )
}

export default CmtExpendableCardDemo
