import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'

import { Maybe } from '@src/common/functions'

const PreviewWrapper = ({ children, classes, pollData }) => {
  return (
    <Grid item xs={12} sm={5} style={{ paddingRight: 11 }}>
      <Box className={classes.checkoutSmallPreview}>
        <Typography className={classes.checkoutSmallPreviewTitle} variant="h4">
          {Maybe.isNoneOrEmptyString(pollData.pollSubTitle)}
        </Typography>
        {children}
        <Box className={classes.checkoutSmallPreviewFoot}>
          <Typography
            className={classes.checkoutSmallPreviewFootTitle}
            variant="h4"
          >
            {Maybe.isNoneOrEmptyString(pollData.pollTitle)}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default PreviewWrapper
