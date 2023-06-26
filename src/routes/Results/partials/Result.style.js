import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    borderRadius: '5px',
    margin: '8px 0 0',
    padding: '19px 19px',
    [theme.breakpoints.down('sm')]: {
      padding: '6px 6px',
    },
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
  chartContainer: {},
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '5px',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
    lineHeight: '21px',
    color: theme.palette.common.black,
    wordBreak: 'break-all',
  },
  filterButton: {
    height: '42px',
    width: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // animation: "all .5s ease-out",
    // "&:hover": {
    //     border: "1px solid #E5E5E5",
    //     borderRadius: "5px",
    //     boxShadow: "0px 1px 7px 0px rgba(0,0,0,0.08)",
    // },
    // "&:active": {
    //     border: "1px solid #E5E5E5",
    //     borderRadius: "5px",
    //     boxShadow: "inset 0px 1px 7px 0px rgba(0,0,0,0.08)",
    // },
  },
  filterIcon: {
    color: theme.palette.common.black,
    fontSize: '24px',
  },
  chartResult: {
    background: theme.palette.common.white,
    display: 'flex',
    marginTop: '3px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    height: '100%',
  },
  chartContent: {
    background: '#F6F6F6',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: '9px',
    },
  },
  resultContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '60%',
    height: 'auto',
    // height: "320px",
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '& :first-child': {
      marginBottom: '4px',
      objectFit: 'contain',
    },
  },
  result: {
    marginLeft: '0.5rem',
    background: '#F6F6F6',
    // height: "156px",
    minHeight: '156px',
    height: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0rem',
    },
  },
  optionText: {
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    padding: '2rem',
    wordBreak: 'break-word',
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionResult: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  optionCount: {
    color: '#0A3C81',
    fontFamily: 'Poppins Bold',
    fontSize: '25px',
  },
  optionOutOfCount: {
    color: '#0A3C81',
    fontFamily: 'Poppins Bold',
    fontSize: '14px',
  },
  percentageText: {
    fontFamily: 'Poppins Regular',
    fontSize: '11px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    zIndex: '11',
    lineHeight: '15px',
    color: theme.palette.common.black,
  },
  imagePreview: {
    height: '126px',
    width: '217px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    wordBreak: 'break-word',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    color: theme.palette.common.black,
  },
  divider: {
    margin: '1rem 0',
    borderBottom: '1px solid #E5E5E5',
  },
  dived: {
    borderRight: '1px solid #E5E5E5',
    marginRight: '20px',
    [theme.breakpoints.down('sm')]: {
      borderRight: 'none',
      marginRight: '0',
    },
  },

  comments: {
    flexGrow: 1,
    minHeight: '300px',
    maxHeight: '500px',
    overflow: 'hidden',
    width: '50%',
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'fit-content',
    },
  },
  fullHeight: {
    height: 'calc(100% - 18px)',
    overflow: 'hidden auto',
  },
  commentTitle: {
    fontFamily: 'Poppins Bold',
    fontSize: '15px',
    color: theme.palette.common.black,
  },
  quickCard: {
    margin: '8px 0',
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
  previewIcon: {
    fontFamily: 'Poppins Bold',
    fontSize: '40px',
    cursor: 'pointer',
    color: '#0A3C81',
  },

  filter: {
    border: '1px solid #E5E5E5',
    width: '30%',
    borderRadius: '5px',
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
  },
  winnerVideo: {
    height: '200px',
    width: '200px',
    borderRadius: '5px',
  },
  resultVideo: {
    borderRadius: '5px',
    height: '160px',
    width: '150px',
    [theme.breakpoints.down('xs')]: {
      width: '200px',
    },
  },
}))

export default useStyles
