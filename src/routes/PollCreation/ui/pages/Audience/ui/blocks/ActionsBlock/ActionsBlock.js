import * as React from 'react'
import { Box } from '@material-ui/core'

import { Button } from '@src/routes/PollCreation/ui/components'

import useActionsBlockStyles from './ActionsBlock.styles'

const ActionsBlock = ({ onPrev, onNext, loading }) => {
  const classes = useActionsBlockStyles()

  return (
    <Box className={classes.actionsBlock}>
      <Button onClick={onPrev} mx={3} variant="outlined">
        Preview
      </Button>
      <Button onClick={onNext} disabled={loading}>
        Checkout
      </Button>
    </Box>
  )
}

export default ActionsBlock
