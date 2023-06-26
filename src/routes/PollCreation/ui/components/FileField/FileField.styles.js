import { makeStyles } from '@material-ui/core'

const useFileFieldStyles = makeStyles((theme) => ({
  fileFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
  },
  fileField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
  },
  helperText: {
    color: '#F44336 !important',
  },
  fileFieldLabel: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    marginBottom: '6px',
  },
  placeholderBox: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '20px',
    textAlign: 'center',
    '& > strong': {
      color: '#000000',
      fontSize: '13px',
      fontWeight: '400',
    },
    '& > p': {
      color: 'rgba(0, 0, 0, 0.35)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

export default useFileFieldStyles
