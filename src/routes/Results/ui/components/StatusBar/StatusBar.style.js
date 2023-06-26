import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '63px',
    padding: '0 20px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '8px',
      height: 'auto',
    },
  },
  statusText: {
    display: '-webkit-box',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    color: theme.palette.common.white,
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
  },
  icons: {
    margin: 'auto 0',
    marginRight: '12px',
    height: '35px',
  },
}))

export default useStyles
