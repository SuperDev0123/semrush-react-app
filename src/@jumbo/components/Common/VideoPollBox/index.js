import React, { useState } from 'react'
import VideoPlayer from 'react-simple-video-player'
import clsx from 'clsx'
import { Box, Button, makeStyles } from '@material-ui/core'

import dtheme from '@src/common/config/theme/defaultTheme'

import IPopper from '../IPopper'
import LabelInput from '../LabelInput'

const src = {
  file: '//wave.video/embed/5f343b1346e0fb001045337d/5f343b1346e0fb0010453381.mp4',
  poster:
    '//wave.video/embed/5f343b1346e0fb001045337d/5f343b1846e0fb0010453391.jpg',
}

const titleStyle = {
  fontSize: 20,
  fontWeight: 400,
  fontFamily: 'made_tommyregular, sans-serif',
  lineHeight: '25px',
  backgroundColor: dtheme.palette.primary.dark,
  color: dtheme.palette.primary.contrastText,
}

const VideoPollBox = ({ optText, optCountText, infoTxt }) => {
  const useStyles = makeStyles((theme) => ({
    checkIcon: {
      fontSize: 30,
      marginTop: 5,
    },
    optionBox: {
      width: '100%',
      position: 'relative',
      '& .input-label,& label': {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 20,
        lineHeight: '25px',
      },
      '& .info-box': {
        position: 'absolute',
        left: 17,
        top: 12,
        zIndex: 1,
        '& .helper-icon': {
          color: '#fff',
          fontSize: 19,
        },
      },
      '& .input-label': {
        [theme.breakpoints.down('sm')]: {
          fontSize: 20,
          lineHeight: '26px',
          padding: '22px 40px',
        },
      },
    },
    dropHolder: {
      '& .dropzone': {
        backgroundImage: "url('./../images/plus-mark.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 51px',
        backgroundColor: '#F4F4F4',
        position: 'relative',
        height: 276,
        border: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        cursor: 'pointer',
        '&.hasFile': {
          backgroundImage: 'none',
          cursor: 'auto',
        },
        '& label': {
          position: 'absolute',
          textAlign: 'center',
          color: theme.palette.primary.dark,
          fontFamily: 'made_tommyregular, sans-serif',
          bottom: 50,
          left: 0,
          fontSize: 18,
          lineHeight: '24px',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
        '& .upload-btn': {
          position: 'absolute',
          bottom: 14,
          right: 14,
          fontSize: 18,
          padding: 0,
          border: 0,
          zIndex: 5,
          color: theme.palette.primary.dark,
        },
        '& aside': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          display: 'grid',
          placeContent: 'center',
          height: '100%',
          padding: '0 15px',
        },
      },
    },
    videoHolder: {
      minHeight: 90,
      padding: 15,
      backgroundColor: '#E7E7E7',
      display: 'grid',
    },
    fileUpload: {
      top: 0,
      bottom: 0,
      opacity: 0,
    },
    editFile: {
      right: '0 !important',
      left: 'unset !important',
      bottom: '0 !important',
      background: 'transparent !important',
      '& .MuiTouchRipple-root': {
        display: 'none !important',
      },
    },
  }))
  const classes = useStyles()
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <Box className={clsx(classes.optionBox, 'option-box')}>
      <IPopper>{infoTxt}</IPopper>
      <LabelInput
        label={optText}
        compStyle={titleStyle}
        windowWidth="100%"
        type="input"
      />

      <Box className={classes.dropHolder}>
        <Box className="dropzone">
          {selectedFile === null && (
            <>
              <Button
                variant="contained"
                component="label"
                className={classes.fileUpload}
              >
                <input
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  accept="video/mp4,video/x-m4v,video/*"
                  hidden
                />
              </Button>
              <label>Add Video {optCountText}</label>
            </>
          )}
          {selectedFile !== null && (
            <VideoPlayer
              url={src.file}
              poster={src.poster}
              autoplay={false}
              width="100%"
            />
          )}
          <Button
            variant="outline"
            component="label"
            className={classes.editFile}
          >
            <i className="fas fa-edit upload-btn action-btn"></i>
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              accept="video/mp4,video/x-m4v,video/*"
              hidden
            />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoPollBox
