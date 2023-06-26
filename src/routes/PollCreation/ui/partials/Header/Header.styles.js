import { makeStyles } from '@material-ui/core'

const useHeaderStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#016AE9',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
    marginBottom: '22px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '15px',
    },
    position: 'absolute',
    top: '74px',
    right: 0,
    left: 0,
  },
}))

export default useHeaderStyles
