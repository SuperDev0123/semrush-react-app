import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import GroupListlContextProvider from './GroupListlContextProvider'
import DemoSourceCode from './DemoSourceCode'
import GroupListView from './GroupListView'
import DemoSettings from './DemoSettings'

const CmtGroupListDemo = () => {
  return (
    <GroupListlContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <GroupListView />
      </CorematComponentDemo>
    </GroupListlContextProvider>
  )
}

export default CmtGroupListDemo
