import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'auto',
    width: '100%',
    display: 'flex',
    background: '#F6F6F6',
    borderRadius: '0.4rem',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  imageContainer: {
    padding: '20px',
    display: 'flex',
    width: '65%',
    borderRadius: '0.4rem 0 0 0.4rem',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: '0.4rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
    },
  },
  trophy: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    height: '100%',
  },
  imageContent: {
    height: '130px',
    padding: '2px',
    // width: "269px",
    width: '50%',
    wordBreak: 'break-word',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    background: theme.palette.common.white,
  },
  imageTextContent: {
    padding: '2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '0.2rem',
    },
  },
  descriptionContainer: {
    width: '35%',
    textAlign: 'start',
    margin: '0.5rem 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      marginTop: '0.5rem',
      paddingBottom: '0.5rem',
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
    },
  },
  title: {
    fontFamily: 'Poppins Bold',
    fontSize: '24px',
    position: 'relative',
    color: theme.palette.common.white,
    '&:after': {
      content: "' '",
      position: 'absolute',
      height: '1px',
      width: '75px',
      background: '#fff',
      bottom: 0,
      left: 0,
    },
  },
  subTitle: {
    fontFamily: 'Poppins Bold',
    fontSize: '24px',
    flex: 1,
    color: theme.palette.common.white,
  },

  winnerText: {
    fontFamily: 'Poppins Bold',
    fontSize: '15px',
    lineHeight: '21px',
    color: '#000',
  },
  winnerDescription: {
    fontFamily: 'Poppins Regular',
    fontSize: '12px',
    color: '#535353',
    lineHeight: '17px',
    marginBottom: '16px',
  },

  flatBtn: {
    borderRadius: '.2rem',
    boxShadow: 'none',
    backgroundColor: '#016AE9',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    lineHeight: '17px',
    padding: '12px 12px',
    width: '148px',
    '&:hover': {
      backgroundColor: '#0e72eb',
    },
    '& span': {
      fontWeight: 500,
      color: '#ffffff',
      textTransform: 'initial',
    },
  },
  divider: {
    marginTop: '1rem',
    borderBottom: '1px solid #E5E5E5',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  tidedResults: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '50%',
    '& :first-child': {
      marginBottom: '3px',
    },
  },
  tidedResult: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: 'Poppins Bold',
    fontSize: '16px',
    width: '100%',
    height: '40px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

export default useStyles
