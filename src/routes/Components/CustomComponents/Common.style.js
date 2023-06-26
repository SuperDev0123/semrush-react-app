import { makeStyles, styled, Dialog } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  tooltip: {
    color: '#000',
    borderRadius: '5px',
    background: '#fff',
    padding: '15px 25px',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '450px',
    display: 'inline-block',
  },
  blockquoteWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paper: {
    fontFamily: "'made_tommyregular', sans-serif",
    color: '#333',
    '& .MuiList-padding,& li': {
      padding: 0,
    },
    '& h3,& textarea': {
      lineHeight: 1.3,
      marginTop: 15,
      marginBottom: 15,
    },
    '& span': {
      fontFamily: "'made_tommyregular', sans-serif",
    },
  },
  pollOptionTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
    },
  },
  instructionTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
  sectionTitle: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '21px',
    },
  },
  textarea: {
    width: '100%',
    padding: 5,
    fontFamily: 'made_tommyregular',
    fontSize: 14,
    border: '1px solid #ccc',
  },
  list: {
    marginLeft: 17,
    '& li': {
      display: 'list-item',
      listStyle: 'disc',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: '35px',
    cursor: 'pointer',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      color: '#0414ff',
    },
  },
  previewBox: {
    borderRadius: 5,
    '&.image': {
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      display: 'flex',
      '& img': {
        flexShrink: 0,
        maxWidth: '50%',
        width: '100%',
        objectFit: 'contain',
        cursor: 'url(/images/icons/zoom-in.png), auto',
      },
    },
    '&.short-text': {
      display: 'flex',
      padding: '5px 10px',
      '& .option-txt': {
        alignSelf: 'center',
        fontFamily: "'made_tommyregular',sans-serif",
      },
    },
    '&.video>div': {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 'auto !important',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },

  header: {
    '& .MuiTypography-h6': {
      fontSize: 27,
      fontFamily: "'made_tommybold',sans-serif",
      fontWeight: 600,
      lineHeight: 1.2,
      color: '#333',
    },
  },
  footer: {
    justifyContent: 'flex-start',
    '& .MuiButton-root': {
      fontSize: 14,
      padding: '6px 20px',
      fontFamily: "'made_tommyregular',sans-serif",
      backgroundColor: 'rgb(2 14 182 / 10%)',
      color: 'rgb(4 20 255 / 65%)',
    },
  },
}))

export const useAudioStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    width: 'calc(100% - 25px)',
    marginLeft: 10,
    marginTop: 8,
    '& .MuiTypography-body1': {
      top: 4,
      position: 'relative',
      left: -2,
      fontSize: 13,
      fontWeight: 500,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
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
export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

export const usePreviewFactoryAudioStyles = makeStyles((theme) => ({
  root: {
    padding: 5,
    width: '100%',
    margin: '10px 0 0 0',
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
