import React from 'react'
import { Box, Typography } from '@material-ui/core'

import { PreviewWrapper } from '../../components'

const TextTypePreview = ({ classes, pollData }) => {
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
          <a
            target="_blank"
            href={pollData.fileA}
            className={classes.checkoutInfoListItemTextPrimary}
            rel="noreferrer"
          >
            {pollData.fileA}
          </a>
        </Box>
        <Box>
          <Typography className={classes.checkoutInfoListItemTextSecondary}>
            {pollData.textA}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 10 }}>
          <a
            target="_blank"
            href={pollData.fileB}
            className={classes.checkoutInfoListItemTextPrimary}
            rel="noreferrer"
          >
            {pollData.fileB}
          </a>
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

export default TextTypePreview
