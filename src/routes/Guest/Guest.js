import * as React from 'react'
import { Box } from '@material-ui/core'

import { GuestBody } from './ui/partials'

import useGuestStyles from './Guest.styles'

const Guest = () => {
  const classes = useGuestStyles()

  return (
    <Box className={classes.guest}>
      <GuestBody />
    </Box>
  )
}

export default Guest
