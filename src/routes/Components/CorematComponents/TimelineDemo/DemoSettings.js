import React, { useContext } from 'react'

import {
  SectionLegend,
  SettingsComponent,
} from '@src/@jumbo/components/CorematDemosComponents'
import AppRadioButton from '@src/@jumbo/components/Common/formElements/AppRadioButton'
import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'

const DemoSettings = () => {
  const { alignment, setAlignment } = useContext(CorematContext)

  return (
    <SettingsComponent title="Cmt Timeline">
      <SectionLegend title="Alignment">
        <AppRadioButton
          name="alignment"
          label="Left"
          value="left"
          checked={alignment === 'left'}
          onChange={(event) => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Center"
          value="center"
          checked={alignment === 'center'}
          onChange={(event) => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Right"
          value="right"
          checked={alignment === 'right'}
          onChange={(event) => setAlignment(event.target.value)}
        />
        <AppRadioButton
          name="alignment"
          label="Zigzag"
          value="zigzag"
          checked={alignment === 'zigzag'}
          onChange={(event) => setAlignment(event.target.value)}
        />
      </SectionLegend>
    </SettingsComponent>
  )
}

export default DemoSettings
