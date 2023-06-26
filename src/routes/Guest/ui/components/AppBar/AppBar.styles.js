import { makeStyles } from '@material-ui/core'

const useAppBarStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    width: '100%',
    height: '71px',
    left: '0px',
    top: '0px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.15)',
  },
  toolbar: {
    display: 'flex',
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
}))

export default useAppBarStyles
