import React, { useState } from 'react'
import LabelInput from '../LabelInput'
import { Grid, Box, Button, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import AudioPlayer from 'material-ui-audio-player'
import IPopper from '../IPopper'
import dtheme from '../../../../common/config/theme/defaultTheme'

const src = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
]

const titleStyle = {
  fontSize: 24,
  lineHeight: '30px',
  fontWeight: 400,
  fontFamily: 'made_tommyregular, sans-serif',
  backgroundColor: dtheme.palette.primary.dark,
  color: dtheme.palette.primary.contrastText,
}

const AudioPollBox = ({
  optText,
  optCountText,
  infoTxt,
  onSetFile,
  onLabel,
}) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const useAudioStyles = makeStyles((theme) => ({
    root: {
      padding: 5,
      width: 'calc(100% - 25px)',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      '& .MuiTypography-body1': {
        top: 4,
        position: 'relative',
        left: -2,
        fontSize: 13,
        fontWeight: 500,
      },
    },
    loopIcon: {
      color: '#3f51b5',
      '&.selected': {
        color: '#0921a9',
      },
      '&:hover': {
        color: '#7986cb',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    playIcon: {
      color: '#0a3d80',
      '&:hover': {
        color: '#273ab5',
      },
    },
    replayIcon: {
      color: '#e6e600',
    },
    pauseIcon: {
      color: '#0099ff',
    },
    volumeIcon: {
      color: 'rgba(0, 0, 0, 0.74)',
      '&:hover': {
        color: 'rgba(0, 0, 0, 0.54)',
      },
      '& ~ .MuiPaper-elevation1': {
        zIndex: 5,
      },
    },
    volumeSlider: {
      color: 'black',
      zIndex: 5,
    },
    progressTime: {
      color: 'rgba(0, 0, 0, 0.54)',
    },
    mainSlider: {
      color: '#3f51b5',
      '& .MuiSlider-rail': {
        color: '#7986cb',
      },
      '& .MuiSlider-track': {
        color: '#3f51b5',
      },
      '& .MuiSlider-thumb': {
        color: '#303f9f',
      },
    },
  }))

  const useStyles = makeStyles((theme) => ({
    checkIcon: {
      fontSize: 30,
      marginTop: 5,
    },
    iconGrid: {
      display: 'flex',
      alignItems: 'center',
    },
    optionBox: {
      width: '100%',
      position: 'relative',
      textAlign: 'left',
      '& .input-label.input': {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: '8px 35px 8px 45px',
      },
      '& .input-label,& label': {
        width: '100%',
      },
      '& .input-label.textarea': {
        minHeight: 82,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      '& .info-box': {
        position: 'absolute',
        left: 12,
        top: 12,
        zIndex: 2,
        '& .helper-icon': {
          color: '#ffffff',
          fontSize: 19,
        },
      },
      '& .input-label': {
        [theme.breakpoints.down('sm')]: {
          fontSize: 20,
          lineHeight: '26px',
        },
      },
      '& .MuiButton-label': {
        [theme.breakpoints.down('sm')]: {
          fontSize: '22px !important',
          lineHeight: '28px !important',
          '&:before': {
            top: 'calc(50% - 10px)',
            left: 0,
            width: 20,
            height: 20,
          },
        },
      },
    },
    audioHolder: {
      minHeight: 82,
      padding: '15px 4px 15px 15px',
      borderRadius: '0 0 10px 10px',
      backgroundColor: '#ffffff',
      display: 'grid',
      '& .MuiButtonBase-root': {
        background: '#ffffff',
        boxShadow: 'none',
        width: 'calc(100% - 25px)',
        '&:hover': {
          background: '#ffffff',
          boxShadow: 'none',
        },
        '&.upload-btn': {
          '& .MuiButton-label': {
            fontSize: 28,
            lineHeight: '35px',
            fontFamily: 'made_tommyregular, sans-serif',
            fontWeight: 400,
            textAlign: 'left',
            color: theme.palette.primary.dark,
            display: 'block',
            textTransform: 'capitalize',
            letterSpacing: 0,
            position: 'relative',
            paddingLeft: 37,
            '&:before': {
              content: "''",
              width: 25,
              height: 25,
              background: "url('/images/plus.svg')",
              position: 'absolute',
              left: 0,
              top: 'calc(50% - 12.5px)',
            },
          },
        },
      },
    },
    fileEdit: {
      right: 10,
      bottom: 10,
      position: 'absolute',
      display: 'inline-flex',
      width: 16,
      '& .edit-action': {
        fontSize: 16,
        color: theme.palette.primary.dark,
      },
      '& input': {
        width: 16,
        height: 16,
        position: 'absolute',
        left: 0,
        top: 0,
        cursor: 'pointer',
        opacity: 0,
      },
    },
  }))

  const classes = useStyles()

  const onSelectedFile = (e) => {
    setSelectedFile(e.target.files[0])
    const reader = new FileReader()
    reader.onload = function () {
      onSetFile(this.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={1} className={classes.iconGrid}>
        <img src="/images/checkCircle.svg" className={classes.checkIcon} />
      </Grid>
      <Grid item xs={11}>
        <Box className={clsx(classes.optionBox, 'option-box')}>
          <IPopper>{infoTxt}</IPopper>
          <LabelInput
            onLabelChangeVal={(text) => onLabel(text)}
            classnm={classes.optionLabel}
            label={optText}
            compStyle={titleStyle}
            windowWidth="100%"
            type="input"
          />
          <Box className={classes.audioHolder}>
            {selectedFile === null && (
              <Button
                variant="contained"
                component="label"
                className="upload-btn"
              >
                Add Audio {optCountText}
                <input
                  type="file"
                  onChange={(e) => onSelectedFile(e)}
                  accept="audio/mp3,audio/*;capture=microphone"
                  hidden
                />
              </Button>
            )}
            {selectedFile !== null && (
              <AudioPlayer
                elevation={1}
                width="100%"
                useStyles={useAudioStyles}
                variation="default"
                spacing={3}
                download={false}
                autoplay={false}
                order="standart"
                preload="auto"
                loop={false}
                src={src}
              />
            )}
            <span className={classes.fileEdit}>
              <i className={'fas fa-edit action-btn edit-action'}></i>
              <input
                type="file"
                onChange={(e) => onSelectedFile(e)}
                accept="audio/mp3,audio/*;capture=microphone"
              />
            </span>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AudioPollBox
