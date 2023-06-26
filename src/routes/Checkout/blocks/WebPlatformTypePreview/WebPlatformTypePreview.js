import React from 'react'
import { Box, Typography } from '@material-ui/core'

import { PreviewWrapper } from '../../components'

const WebPlatformTypePreview = ({ classes, pollData }) => {
  return (
    <PreviewWrapper classes={classes} pollData={pollData}>
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        className={classes.checkoutSmallPreviewBody}
      >
        <Box sx={{ marginTop: 10 }}>
          <Typography className={classes.checkoutInfoListItemTextPrimary}>
            {pollData.fileA}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.checkoutInfoListItemTextSecondary}>
            {pollData.textA}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 10 }}>
          <Typography className={classes.checkoutInfoListItemTextPrimary}>
            {pollData.fileB}
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.checkoutInfoListItemTextSecondary}>
            {pollData.textB}
          </Typography>
        </Box>
      </Box>
    </PreviewWrapper>
  )
}

export default WebPlatformTypePreview
