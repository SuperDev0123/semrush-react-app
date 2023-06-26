import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  dropHolderError: {
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: 'auto',
    },
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
  dropHolder: {
    width: ' calc(100% - 30px)',
    marginLeft: 8,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& .dropzone': {
      backgroundImage: "url('./../../images/image-placeholder.svg')",
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
  previewThumb: {
    objectFit: 'contain',
  },
}))

export { useStyles }
