import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  },
  margins: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  },
  fullWidth: {
    [theme.breakpoints.up('md')]: {
      width: '200%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  changePlanButton: {
    padding: '8px 20px',
    lineHeight: '28px',
    marginBottom: '2rem',
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0158c1',
    },
  },
  modalBox: {
    '& .MuiDialog-container .MuiPaper-root': {
      maxWidth: 'max-content',
      minWidth: '40%',
    },
  },
  modalBoxHide: {
    display: 'none',
  },
  modalHeaderBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem 2rem 0',
  },
  modalHeaderTitle: {
    padding: '0',
    '& .MuiTypography-root': {
      fontSize: '18px',
      fontFamily: 'Poppins Bold',
      color: '#000',
      lineHeight: '27px',
    },
  },
  modalHeaderClose: {
    color: '#200E32',
    padding: '0',
    minWidth: 'auto',
  },
  modalBodyBox: {
    padding: '0',
  },
  modalBoxHidden: {
    display: 'none',
  },
}))

export default useStyles
