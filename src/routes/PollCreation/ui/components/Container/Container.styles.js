import { makeStyles } from '@material-ui/core'

const useContainerStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    maxWidth: '1049px',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-end',
    margin: '0 auto',
    overflow: 'visible',
  },
}))

export default useContainerStyles
