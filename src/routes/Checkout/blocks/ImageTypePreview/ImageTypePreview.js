import React from 'react'
import { Box } from '@material-ui/core'

import { PreviewWrapper } from '../../components'

const ImageTypePreview = ({ classes, pollData }) => {
  return (
    <PreviewWrapper classes={classes} pollData={pollData}>
      <Box className={classes.checkoutSmallPreviewBody}>
        <Box
          sx={{
            flex: 1,
            border: '1px solid #efefef',
            borderRadius: 5,
            marginRight: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={pollData.fileA} alt={pollData.textA} />
        </Box>
        <Box
          sx={{
            flex: 1,
            border: '1px solid #efefef',
            borderRadius: 5,
            marginLeft: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={pollData.fileB} alt={pollData.textB} />
        </Box>
      </Box>
    </PreviewWrapper>
  )
}

export default ImageTypePreview
