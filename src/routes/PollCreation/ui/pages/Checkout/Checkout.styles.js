import { makeStyles } from '@material-ui/core'

const useCheckoutStyles = makeStyles((theme) => ({
  container: {
    background: 'transparent',
    border: 'none',
    '& .MuiCardContent-root': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      overflow: 'hidden',
    },
  },
}))

export default useCheckoutStyles
