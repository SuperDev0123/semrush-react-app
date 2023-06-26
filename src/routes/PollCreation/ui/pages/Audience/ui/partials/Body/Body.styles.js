import { makeStyles } from '@material-ui/core'

const useBodyStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0,
    background: 'transparent',
    border: 'none',
    '& .MuiCardContent-root': {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      overflow: 'hidden',
    },
  },
  bodyWrapper: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  bodyWrapperSection: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginRight: '12px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  bodyWrapperArticle: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '210px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

export default useBodyStyles
