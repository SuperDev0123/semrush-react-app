import React from 'react'
import { Box, Typography } from '@material-ui/core'
import VideoPlayer from 'react-simple-video-player'

import { PreviewWrapper } from '../../components'

const VideoTypePreview = ({ pollData, classes }) => (
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
      <Box
        sx={{ width: '100%', marginTop: 10 }}
        className={classes.videoPlayerWrapper}
      >
        <VideoPlayer
          url={pollData.fileA}
          poster={pollData.fileA}
          autoplay={false}
          className={classes.videoPlayer}
          width="100%"
        />
      </Box>
      <Box sx={{ marginTop: 10, width: '100%' }}>
        <Typography className={classes.checkoutInfoListItemTextPrimary}>
          {pollData.textB}
        </Typography>
      </Box>
      <Box
        sx={{ width: '100%', marginTop: 10 }}
        className={classes.videoPlayerWrapper}
      >
        <VideoPlayer
          url={pollData.fileB}
          poster={pollData.fileB}
          autoplay={false}
          className={classes.videoPlayer}
          width="100%"
        />
      </Box>
    </Box>
  </PreviewWrapper>
)

export default VideoTypePreview
