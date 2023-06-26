import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    boxShadow: 'none',
    borderRadius: '0.5rem',
    color: theme.palette.common.black,
    // boxShadow: theme.shadows[1],
  },
  title: {
    borderBottom: '1px solid #e2dfdf',
    padding: '1.5rem',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    fontFamily: 'Poppins Bold',
    wordSpacing: '2px',
  },
  main: {
    padding: '1rem',
    transform: 'all .2s',
    fontSize: '14px',
    wordSpacing: '2.7px',
    letterSpacing: '0.9px',
    fontFamily: 'SF UI Display Light',
  },
  footer: {
    width: '100%',
  },
}))

export default useStyles
