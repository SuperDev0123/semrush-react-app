import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import SearchContextProvider from './SearchContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import SearchView from './SearchView'

const CmtSearchDemo = () => {
  return (
    <SearchContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <SearchView />
      </CorematComponentDemo>
    </SearchContextProvider>
  )
}

export default CmtSearchDemo
