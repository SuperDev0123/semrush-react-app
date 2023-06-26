import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: '1px solid #E5E5E5',
    paddingBottom: '21px',
  },
  paper: {
    padding: '0.5rem 0',
    margin: '0.35rem 0',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    position: 'relative',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.10)',
  },
  cardDetails: {
    // paddingBottom: "19px",
    // borderBottom: "1px solid #E5E5E5",
  },
  title: {
    fontFamily: 'Poppins SemiBold',
    color: theme.palette.common.black,
    fontSize: '14px',
    lineHeight: '21px',
    wordBreak: 'break-all',
  },
  iconContinuer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '6px',
    whiteSpace: 'nowrap',
  },
  iconText: {
    fontFamily: 'Poppins Regular',
    fontSize: '11px',
    lineHeight: '17px',
    marginRight: '25px',
    display: 'flex',
    alignItems: 'center',
    color: '#929292',
  },
  options: {
    display: 'flex',
    justifyContent: 'end',
  },
  percentageContainer: {
    zIndex: '11',
    marginRight: '3px',
    borderRight: '1px solid #E5E5E5',
    borderLeft: '1px solid #E5E5E5',
    padding: '0 14px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
    },
  },

  percentageContain: {
    width: '140px',
    textAlign: 'start',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'default',
    // [theme.breakpoints.down("xs")]: {
    //     width: "75px",
    // },
  },
  percentage: {
    fontFamily: 'Poppins Bold',
    fontSize: '18px',
    lineHeight: '27px',
    color: '#0A3C81',
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
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  buttons: {
    borderRadius: '0.3rem',
    zIndex: '11',
    border: '1px solid #E5E5E5',
    height: '52px',
    width: '52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginLeft: '12px',
    animation: 'all .5s ease-out',
    '&:hover': {
      borderRadius: '5px',
      boxShadow: '0px 1px 7px 0px rgba(0,0,0,0.08)',
    },
    '&:active': {
      borderRadius: '5px',
      boxShadow: 'inset 0px 1px 7px 0px rgba(0,0,0,0.08)',
    },
    [theme.breakpoints.down('sm')]: {
      height: '38px',
      width: '38px',
    },
  },
  cardUpdates: {
    height: '3.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    // [theme.breakpoints.down("lg")]: {
    //     marginTop: "1rem",
    // },
    // [theme.breakpoints.down("md")]: {
    //     marginTop: "1rem",
    //     justifyContent: "end",
    // },
    // [theme.breakpoints.down("xs")]: {
    //     marginTop: "0.5rem",
    // },
  },
  cardUpdatesText: {
    fontFamily: 'Poppins Italic',
    fontSize: '12px',
    lineHeight: '17px',
    color: theme.palette.common.black,
    [theme.breakpoints.down('xs')]: {
      marginTop: '.5rem',
    },
  },
  mIcons: {
    color: theme.palette.common.black,
  },
  confirmText: {
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    lineHeight: '25.75px',
  },
  skeleton: {
    marginBottom: '.5rem',
  },
}))

export default useStyles
