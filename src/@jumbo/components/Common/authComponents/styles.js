import makeStyles from '@material-ui/core/styles/makeStyles'
import { alpha } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'

export const useSignupStyles = makeStyles((theme) => ({
  authThumb: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      order: 2,
    },
  },
  authContent: {
    padding: '35px',
    paddingTop: '50px',
    '& .MuiInputBase-input,& .MuiTypography-body1, & p': {
      fontFamily: 'made_tommyregular, sans-serif',
    },
    [theme.breakpoints.up('md')]: {
      width: (props) => (props.variant === 'default' ? '50%' : '100%'),
      order: 1,
    },
    [theme.breakpoints.up('xl')]: {
      padding: '50px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '13px',
    },
  },
  titleRoot: {
    color: '#19519D',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '36px',
    marginBottom: 0,
    fontFamily: 'Poppins',
  },
  subTitleRoot: {
    color: '#000000',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  labelRoot: {
    color: '#000000',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.common.dark, 0.4),
    },
    marginTop: 5,
    marginBottom: 15,
    borderColor: '#929292',
  },
  termText: {
    color: '#000000',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins !important',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#929292',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
    textTransform: 'inherit',
  },
  submitButtonBlue: {
    width: '100%',
    height: 50,
    backgroundColor: '#016AE9',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
    textTransform: 'inherit',
  },
  topBar: {
    position: 'fixed',
    width: '100%',
    marginTop: 0,
    marginLeft: '-50%',
    left: '50%',
    background: '#fff',
    boxShadow: '0px 4px 6px 0px #00000026',
    zIndex: 99999,
    top: 0,
    height: 71,
  },
  topLogo: {
    height: 32,
    marginLeft: 60,
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
  },
  textCapital: {
    textTransform: 'capitalize',
  },
  textAcc: {
    textAlign: 'center',
    '& a': {
      marginLeft: 4,
      color: blue,
    },
    paddingTop: 20,
    color: '#000',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins !important',
  },
  alrTextRoot: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
  logo: {
    width: 120,
    maxWidth: 120,
  },
}))
