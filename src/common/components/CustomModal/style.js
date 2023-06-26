import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    '& .MuiTypography-root': {
      fontFamily: 'Poppins Bold',
      fontSize: '18px',
      color: theme.palette.common.black,
    },
  },
  dialogContent: {
    position: 'relative',
  },
  button: {
    width: '40%',
    borderRadius: '.2rem',
    boxShadow: 'none',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    lineHeight: '17px',
    padding: '12px 12px',
  },
  cancelBtn: {
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#0000000a',
    },
    '& span': {
      color: theme.palette.common.black,
      textTransform: 'initial',
    },
  },
  flatBtn: {
    backgroundColor: '#016AE9',
    '&:hover': {
      backgroundColor: '#0e72eb',
    },
    '& span': {
      color: '#ffffff',
      textTransform: 'initial',
    },
  },
  progress: {
    marginRight: '1rem',
  },
}))

export default useStyles
