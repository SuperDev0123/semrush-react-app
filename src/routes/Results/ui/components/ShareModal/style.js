import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '30%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '96%',
    },
  },
  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '2rem 2rem 0',
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#000',
  },
  modalClose: {
    color: '#200E32',
    padding: '0',
    minWidth: 'auto',
  },
  modalBody: {
    margin: '.56rem 2rem 2rem',
  },
  modalShareText: {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '183.9%',
    color: '#000',
  },
  modalLinkCopy: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalLinkText: {
    '& .MuiInputBase-input': {
      backgroundColor: '#F7F7F7',
      color: '#000',
      borderRadius: '5px',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '183.9%',
      padding: '.9rem 1.2rem',
      marginRight: '.25rem',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  },
  modalCopy: {
    backgroundColor: '#929292',
    border: '5px',
    fontSize: '13px',
    fontWeight: '700',
    lineHeight: '20px',
    color: '#fff',
    padding: '1rem 2rem',
    marginLeft: '.25rem',
    '&:hover': {
      backgroundColor: 'rgb(135, 135, 135)',
    },
  },
  modalCopyBlue: {
    backgroundColor: '#016AE9',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
  modalToggleShare: {
    padding: '0 0 0 .5rem',
  },
  modalCheckLabel: {
    '& .MuiTypography-root': {
      color: '#000',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '183.9%',
    },
  },
  modalCheck: {
    padding: '7px',
    '& .MuiButtonBase-root': {
      color: '#fff',
      borderRadius: '20px',
    },
    '& .MuiSwitch-track': {
      opacity: '1 !important',
      backgroundImage: 'linear-gradient(180deg, #C4C4C4 100%, #929292 100%)',
      borderRadius: '20px',
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundImage: 'linear-gradient(180deg, #016AE9 100%, #19519D 100%)',
    },
  },
  modalCancelCopy: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '13px',
    textAlign: 'center',
    lineHeight: '20px',
    padding: '1rem',
    marginTop: '1rem',
    width: '100%',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
}))

export default useStyles
