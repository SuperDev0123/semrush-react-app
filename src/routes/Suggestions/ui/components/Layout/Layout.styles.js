import { makeStyles } from '@material-ui/core'

const useLayoutStyles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
  },
  bodyWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

export default useLayoutStyles
