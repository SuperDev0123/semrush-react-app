import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  audioHolderWrapper: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: 20,
    },
  },
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
    '& .input-label': {
      padding: '22px 11px',
      position: 'relative',
      '& .action-btn': {
        position: 'absolute',
        right: 12,
        bottom: 12,
      },
    },
    '& .input-label,& label': {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  },
  audioHolder: {
    minHeight: 82,
    margin: '0 7px',
    width: 'calc(100% - 30px)',
    borderRadius: '0 0 10px 10px',
    display: 'grid',
    '& .dropzone': {
      backgroundSize: 85,
      padding: '15px 30px 15px 10px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 51px',
      backgroundColor: 'transparent',
      border: '1px dashed #0a3d80',
      borderRadius: 10,
      position: 'relative',
      height: 85,
      cursor: 'pointer',
      '&.hasFile': {
        backgroundImage: 'none',
        cursor: 'auto',
      },
      '& label': {
        position: 'absolute',
        textAlign: 'center',
        fontFamily: 'made_tommyregular, sans-serif',
        bottom: 50,
        textTransform: 'uppercase',
        zIndex: 2,

        '& .MuiButton-root': {
          backgroundColor: theme.palette.primary.dark,
          '&:hover': {
            backgroundColor: '#072d5f',
          },
        },
      },
      '& input[type=file]::file-selector-button': {
        cursor: 'pointer',
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
        '& [type="file"]': {
          width: 20,
          height: 19,
          position: 'absolute',
          left: 0,
          top: 0,
          opacity: 0,
        },
      },
      '& .MuiButtonBase-root': {
        boxShadow: 'none',
        background: 'transparent',
        left: 25,
        bottom: 25,
        width: 'calc(100% - 65px)',
        '&:hover': {
          boxShadow: 'none',
        },
        '&.upload-btn': {
          '& .MuiButton-label': {
            fontSize: 20,
            lineHeight: '35px',
            fontFamily: 'made_tommyregular, sans-serif',
            fontWeight: 400,
            textAlign: 'left',
            color: '#97a9d3',
            display: 'block',
            textTransform: 'capitalize',
            letterSpacing: 0,
            position: 'relative',
            paddingLeft: 37,
            '&:before': {
              content: "''",
              width: 20,
              height: 20,
              backgroundImage: "url('/images/plus.svg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              position: 'absolute',
              left: 0,
              top: 'calc(50% - 11px)',
            },
          },
        },
      },
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      },
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
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

export { useStyles, useAudioStyles }
