import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 'fit-content',
  },
  headerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  title: {
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
    lineHeight: '21px',
    color: theme.palette.common.black,
    wordBreak: 'break-all',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  togglerSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: '5px',
      marginBottom: '5px',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
    },
  },
  tabButton: {
    marginLeft: '3px',
    fontSize: '13px',
    borderRadius: '30px',
    padding: '0.4rem 1.8rem',
    transition: 'all .3s',
    background: '#f6f6f6',
    color: theme.palette.common.black,
  },
  activeButton: {
    color: theme.palette.common.white,
    backgroundColor: '#016AE9',
    '&:hover': {
      backgroundColor: '#016AE9',
    },
  },
  fullHeight: {
    height: '500px',
    overflow: 'hidden auto',
  },
  notData: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBox: {
    height: '40px',
    marginLeft: '2px',
    borderRadius: '40px',
    background: '#f6f6f6',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginTop: '3px',
    },
  },
  hoverSearchText: {
    width: '240px !important',
    padding: '0px 10px !important',
  },
  searchText: {
    border: 'none',
    background: 'none',
    outline: 'none',
    float: 'left',
    padding: 0,
    fontSize: '14px',
    transition: '0.4s',
    lineHeight: '40px',
    width: '0px',
    fontFamily: 'Poppins Regular',
  },
  hoverSearchBtn: {
    background: '#0a3c81 !important',
  },
  searchBtn: {
    color: '#fff',
    float: 'right',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#016AE9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    transition: '0.4s',
  },
  menuOption: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  menuOptionText: {
    marginLeft: '12px',
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  menuIcon: {
    color: '#016AE9',
  },
  loadMoreBtn: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '0 auto',
    marginTop: '3px',
    transition: 'all 0.3s',
    textTransform: 'none',
    color: '#016AE9',
  },
}))

export default useStyles
