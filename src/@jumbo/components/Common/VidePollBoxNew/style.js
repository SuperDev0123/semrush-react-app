import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
  dropHolder: {
    width: ' calc(100% - 30px)',
    marginLeft: 8,
    '& .dropzone': {
      backgroundImage: "url('./../../images/video-camera-placeholder.svg')",
      backgroundSize: 85,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center 51px',
      backgroundColor: 'transparent',
      border: '1px dashed #0a3d80',
      borderRadius: 10,
      position: 'relative',
      height: 250,
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
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
  fileUpload: {
    top: 0,
    bottom: 0,
    '& [type="file"]': {
      opacity: 0,
      width: 125,
      height: 35,
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
}))

export { useStyles }
