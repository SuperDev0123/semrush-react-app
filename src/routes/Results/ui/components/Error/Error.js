import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import SadSmile from '../SadSmile'

const Error = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Box>
          <Typography
            align="center"
            variant="h1"
            style={{ marginBottom: '20px' }}
          >
            Results not founded
          </Typography>
          <SadSmile />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Error
