import { makeStyles } from '@material-ui/core'

const useBodyStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    height: 'auto',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}))

export default useBodyStyles
