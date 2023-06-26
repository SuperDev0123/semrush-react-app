import { makeStyles } from '@material-ui/core'

const useHeaderBlockStyles = makeStyles((theme) => ({
  headerBlock: {
    display: 'flex',
    maxWidth: '1049px',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  headerBlockHead: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#FFFFFF',
    marginRight: '140px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginTop: '20px',
      fontSize: '20px',
    },
  },
}))

export default useHeaderBlockStyles
