import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    borderRadius: '5px',
    margin: '8px 0 0',
    '& .MuiTab-root': {
      color: '#000',
      fontSize: '11px',
    },
    '& .MuiTabs-indicator': {
      width: '96px !important',
      height: 3,
      marginLeft: 32,
      [theme.breakpoints.down('sm')]: {
        width: '85px !important',
        marginLeft: '36px',
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: '10px',
      },
    },
  },
  tabs: {
    borderRadius: 10,
    paddingRight: 18,
    '& .MuiTab-root': {
      paddingTop: 10,
      paddingBottom: 10,
      textTransform: 'capitalize',
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 400,
      fontFamily: 'Poppins Regular',
      [theme.breakpoints.down('sm')]: {
        padding: '25px 5px',
        fontSize: '16px',
      },
    },
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .Mui-selected': {
      fontFamily: 'Poppins SemiBold',
    },
  },
  filterContainer: {
    flexGrow: 1,
    boxShadow: 'none',
    borderRadius: '5px',
    margin: '8px 0 0',
  },
  option: {
    fontSize: '1rem',
    color: theme.palette.common.black,
    padding: '2px 0',
  },
  quickCardFooter: {
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '1rem',
  },
  quickCardButton: {
    backgroundColor: '#19519D',
    color: theme.palette.common.white,
    width: '50px',
    marginBottom: '1rem',
    marginLeft: '3px',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: '#19519D',
    },
  },
  memberCard: {
    marginTop: '15px',
  },
  memberCardButton: {
    fontFamily: 'Poppins SemiBold',
    backgroundColor: '#016AE9',
    fontSize: '17px',
    padding: '1.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#0246f3ed',
    },
  },
  memberContent: {
    padding: '1rem',
  },
  memberCardText: {
    wordSpacing: '2.7px',
    marginBottom: '.5rem',
    letterSpacing: '0.9px',
    fontFamily: 'SF UI Display Light',
    fontSize: '14px',
  },
  featureText: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '14.2px',
    color: '#19519D',
  },
  memberCardPollCount: {
    color: '#19519D',
    fontFamily: 'Poppins SemiBold',
    fontSize: '1.5rem',
    margin: '1rem 0',
    lineHeight: '21px',
  },
  QuickCardTitle: {
    fontSize: '1rem',
    fontFamily: 'Poppins Bold',
  },
}))

export default useStyles
