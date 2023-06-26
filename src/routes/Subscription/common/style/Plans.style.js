import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  centerGrid: {
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    padding: '2rem',
  },
  margins: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: '1rem',
      marginRight: '1rem',
    },
    [theme.breakpoints.down('md')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  },
  subscriptionButton: {
    padding: '8px 20px',
    lineHeight: '28px',
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    marginBottom: '3rem',
    textTransform: 'none',
  },
  currentPlanText: {
    color: '#016AE9',
    fontFamily: 'Poppins Bold',
    lineHeight: '27px',
    fontSize: '18px',
    // paddingTop: "8px",
    // marginBottom: "3rem",
  },
}))

export default useStyles
