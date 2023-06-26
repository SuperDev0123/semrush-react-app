import React from 'react'

import { CorematComponentDemo } from '@src/@jumbo/components/PageComponents'

import CarouselContextProvider from './CarouselContextProvider'
import DemoSourceCode from './DemoSourceCode'
import DemoSettings from './DemoSettings'
import CarouselView from './CarouselView'

const CmtCarouselDemo = () => {
  return (
    <CarouselContextProvider>
      <CorematComponentDemo
        SourceCodeComponent={<DemoSourceCode />}
        SettingsComponent={<DemoSettings />}
      >
        <CarouselView />
      </CorematComponentDemo>
    </CarouselContextProvider>
  )
}

export default CmtCarouselDemo
