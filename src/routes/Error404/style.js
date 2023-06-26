import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  containerBox: {
    height: '100%',
    width: '561px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    translate: 'all 0.3s',
    [theme.breakpoints.down('sm')]: {
      width: '461px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '98%',
    },
  },
  wrapperBox: {
    backgroundColor: theme.palette.common.white,
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    textAlign: 'center',
    padding: '27px',
  },
  statusBox: {
    margin: '3rem auto',
    marginBottom: '1rem',
  },

  statusTextBox: {
    margin: '3rem auto',
    marginTop: '2rem',
    width: '86%',
  },
  statusText: {
    color: '#000',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '36px',
  },
  statusParagraphBox: {
    margin: '2rem auto',
    width: '100%',
  },
  statusParagraph: {
    color: theme.palette.common.black,
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '21px',
  },
  buttonBox: {
    margin: '3rem auto',
  },
  button: {
    backgroundColor: '#016AE9',
    fontFamily: 'Poppins Regular',
    borderRadius: '5px',
    color: theme.palette.common.white,
    fontSize: '16px',
    padding: '.8rem 3rem',
    textDecoration: 'none',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#0364d9',
    },
  },
}))

export default useStyles
