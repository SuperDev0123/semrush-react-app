import React from 'react'
import { Box, Typography } from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player'

import { usePreviewFactoryAudioStyles } from '@src/routes/Components/CustomComponents/Common.style'

import { PreviewWrapper } from '../../components'

const AudioTypePreview = ({ classes, pollData }) => (
  <PreviewWrapper classes={classes} pollData={pollData}>
    <Box
      sx={{
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
      className={classes.checkoutSmallPreviewBody}
    >
      <Box sx={{ marginTop: 10, width: '100%' }}>
        <Typography className={classes.checkoutInfoListItemTextPrimary}>
          {pollData.textA}
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <AudioPlayer
          elevation={1}
          width="100%"
          useStyles={usePreviewFactoryAudioStyles}
          variation="default"
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={false}
          src={URL.createObjectURL(pollData.fileA)}
        />
      </Box>
      <Box sx={{ marginTop: 10, width: '100%' }}>
        <Typography className={classes.checkoutInfoListItemTextPrimary}>
          {pollData.textB}
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <AudioPlayer
          elevation={1}
          width="100%"
          useStyles={usePreviewFactoryAudioStyles}
          variation="default"
          download={false}
          autoplay={false}
          order="standart"
          preload="auto"
          loop={false}
          src={URL.createObjectURL(pollData.fileB)}
        />
      </Box>
    </Box>
  </PreviewWrapper>
)

export default AudioTypePreview
