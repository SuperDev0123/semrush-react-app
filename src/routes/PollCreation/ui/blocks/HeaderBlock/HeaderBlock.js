import * as React from 'react'
import { Typography, Box } from '@material-ui/core'

import { Stepper } from '@src/routes/PollCreation/ui/components'
import { pollCreationStepsList } from '@src/routes/PollCreation/common/data'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'

import useHeaderBlockStyles from './HeaderBlock.styles'

const HeaderBlock = () => {
  const classes = useHeaderBlockStyles()
  const { activeStep, setActiveStep } = React.useContext(PollCreationContext)

  return (
    <Box className={classes.headerBlock}>
      <Typography className={classes.headerBlockHead}>Create a Test</Typography>
      <Stepper
        steps={pollCreationStepsList}
        activeStep={activeStep}
        onStepChange={(stepID) => setActiveStep(stepID)}
      />
    </Box>
  )
}

export default HeaderBlock
