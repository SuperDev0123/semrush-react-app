import React, { useContext } from 'react'
import { Box } from '@material-ui/core'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import AppSwitch from '@src/@jumbo/components/Common/formElements/AppSwitch'
import {
  BackgroundSettingSection,
  OverlaySettingSection,
  SettingsComponent,
} from '@src/@jumbo/components/CorematDemosComponents'

const DemoSettings = () => {
  const { revealed, setRevealed } = useContext(CorematContext)

  return (
    <SettingsComponent title="Cmt Reveal Card">
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        mb={4}
        mt={-2}
        color="text.secondary"
      >
        <AppSwitch
          label="Open Reveal Card"
          checked={revealed}
          onChange={(event) => setRevealed(event.target.checked)}
        />
      </Box>

      <BackgroundSettingSection />
      <OverlaySettingSection />
    </SettingsComponent>
  )
}

export default DemoSettings
