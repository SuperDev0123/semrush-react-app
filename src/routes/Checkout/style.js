import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    '& .action-btn': {
      cursor: 'pointer',
    },
    '& .MuiPaper-root': {
      borderRadius: 10,
    },
    '& .launch-btn': {
      marginTop: -23,
    },
  },
  pageTitle: {
    color: theme.palette.primary.dark,
  },
  listRoot: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  reviewTable: {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
  },
  tblHeadRow: {
    '& .MuiTableCell-head': {
      fontSize: 30,
      color: '#979797',
      lineHeight: 0,
      borderBottom: 0,
      paddingTop: 15,
      position: 'relative',
      top: 15,
    },
  },
  tblBody: {
    '& .MuiTableRow-root': {
      '&:not(:last-child)': {
        borderBottom: '3px solid #deebf1',
      },
    },
    '& .MuiTableCell-root': {
      fontSize: 21,
      lineHeight: '24px',
      fontWeight: 400,
      fontFamily: 'Poppins Regular',
      color: '#232521',
      padding: '16px 25px',
      verticalAlign: 'text-top',
      '& .info-box': {
        display: 'inline-flex',
        position: 'relative',
        top: -7,
        left: 5,
        '& .helper-icon': {
          fontSize: 16,
          color: theme.palette.primary.dark,
        },
      },
    },
  },
  bigTblTile: {
    fontFamily: 'Poppins Regular',
    fontWeight: 700,
    fontSize: 27,
    lineHeight: '31px',
    color: theme.palette.primary.dark,
    display: 'block',
    marginBottom: 5,
  },
  priceDes: {
    marginLeft: 12,
    '&.topPrice': {
      marginLeft: 16,
    },
    '& span': {
      marginLeft: -12,
      marginRight: 5,
    },
  },
  inputWrap: {
    width: 785,
    margin: '0 auto',
    padding: '0 8px',
    [theme.breakpoints.down('md')]: {
      width: 768,
    },
    [theme.breakpoints.down('sm')]: {
      width: 520,
    },
    [theme.breakpoints.down('xs')]: {
      width: 350,
    },
  },
  /* CHECKOUT */
  checkoutSmallPreview: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  checkoutSmallPreviewTitle: {
    fontFamily: 'Poppins Regular',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0em',
    textAlign: 'center',
    padding: '24px 24px 0 24px',
    color: '#232521',
    lineHeight: 1,
  },
  checkoutSmallPreviewBody: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '15px 24px 24px 24px',
  },
  checkoutSmallPreviewFoot: {
    flex: 1,
    height: 50,
    backgroundColor: '#0414FF',
    padding: 18,
  },
  checkoutSmallPreviewFootTitle: {
    fontFamily: 'Poppins Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  checkoutInfoWrapper: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    border: '1px solid #E5E5E5',
    marginBottom: '1rem',
  },
  checkoutInfoTitle: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '21px',
    color: '#19519D',
    padding: '15px 25px',
    textAlign: 'left',
  },
  tableHeader: {
    backgroundColor: '#016AE9',
  },
  tableHeaderCell: {
    color: '#fff',
    fontWeight: '600',
    fontSize: '14.5px',
    lineHeight: '21px',
    fontFamily: 'Poppins SemiBold',
    padding: '16px 25px',
  },
  tableBody: {
    backgroundColor: '#fff',
  },
  tableBodyCell: {
    fontSize: '14.5px',
    lineHeight: '21px',
    border: 'none',
    fontWeight: '600',
    color: '#000',
    padding: '.25rem 25px .25rem 25px',
    fontFamily: 'Poppins SemiBold',
  },
  tableBodyCellSmall: {
    fontSize: '13.5px',
    color: '#000',
    lineHeight: '18px',
    fontWeight: '400',
    fontFamily: 'Poppins Regular',
  },
  tableBodyCellPadding: {
    paddingLeft: '2rem',
  },
  tableBodyCellColor: {
    color: '#19519D',
    fontFamily: 'Poppins Bold',
    fontSize: '14.5px',
  },
  tableBodyLastCellPadding: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  checkoutInfoListItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    padding: 0,
  },
  checkoutInfoListItemAvatar: {
    background: 'rgba(244, 244, 244, 1)',
    width: 60,
    height: 57,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    '& .MuiAvatar-img': {
      width: 'auto !important',
      height: 'auto !important',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 10,
    },
  },
  avatar: {
    '& img': {
      width: 'auto !important',
      height: 'auto !important',
    },
  },
  checkoutInfoListItemText: {
    minWidth: 240,
    [theme.breakpoints.down('sm')]: {
      minWidth: 130,
    },
  },
  checkoutInfoListItemTextPrimary: {
    fontFamily: 'Poppins Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(35, 37, 33, 1)',
    [theme.breakpoints.down('sm')]: {
      fontSize: 15,
    },
    wordBreak: 'break-all',
  },
  checkoutInfoListItemTextSecondary: {
    fontFamily: 'Poppins Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(151, 151, 151, 0.62)',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  checkoutInfoListItemResponses: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 23,
    borderRadius: 5,
    backgroundColor: 'rgba(253, 253, 253, 1)',
    fontFamily: 'Poppins Regular',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    color: 'rgba(35, 37, 33, 1)',
    border: '1px solid #C1C1C1',
    [theme.breakpoints.down('sm')]: {
      minWidth: 40,
    },
  },
  checkoutInfoListItemPrice: {
    fontFamily: 'Poppins Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    textAlign: 'left',
    color: 'rgba(35, 37, 33, 1)',
    marginLeft: '25px',
    minWidth: '50px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 10,
    },
  },
  checkoutInfoFoot: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: 67,
    backgroundColor: 'rgba(4, 20, 255, 1)',
    padding: '22px 32px',
    borderRadius: '0px 0px 10px 10px',
  },
  checkoutInfoFootText: {
    fontFamily: 'Poppins Regular',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 1,
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#FFF',
  },
  checkoutGuaranted: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '1rem',
    padding: '1rem',
    borderRadius: '5px',
    background: '#32364E',
    border: '1px solid #E5E5E5',
  },
  checkoutGuarantedText: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '21px',
    color: '#fff',
    marginLeft: '.5rem',
  },
  ActionButtonsBox: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'end',
    marginTop: '1rem',
  },
  ActionsButtons: {
    borderRadius: '5px',
    // fontFamily: "Poppins Bold",
    textTransform: 'none',
    fontSize: '18px',
    lineHeight: '27px',
    padding: '.813rem 3.125rem',
    fontStyle: 'normal',
    fontFamily: "'Poppins'",
    fontWeight: 600,
  },
  ActionButtonPreview: {
    border: '1px solid #016AE9',
    backgroundColor: '#fff',
    color: '#016AE9',
    marginRight: '1rem',
    '&:hover': {
      backgroundColor: '#efefef',
    },
  },
  ActionButtonLaunch: {
    backgroundColor: '#016AE9',
    color: '#fff',
    position: 'relative',
    '&:hover': {
      backgroundColor: '#0565d9',
    },
  },
  ActionButtonLaunchLoader: {
    position: 'absolute',
    left: '20px',
    top: '50%',
    height: '15px',
    width: '15px',
    backgroundColor: '#0000',
    borderRadius: '50%',
    borderTop: '2px solid #fff',
    borderLeft: '2px solid #fff',
    borderBottom: '2px solid #fff',
    borderRight: '2px solid rgba(255, 255, 255, 0.35)',
    animationName: 'spin',
    animationDuration: '0.75s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    opacity: '1',
    transition: 'all 0.28s ease',
    transitionDelay: '0.1s',
    transform: 'translateY(-50%)',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  videoPlayer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  videoPlayerWrapper: {
    '& div': {
      borderRadius: 10,
      overflow: 'hidden',
      width: '100%',
    },
    '& video': {
      width: '100%',
      height: '100%',
    },
  },
  couponButton: {
    marginBottom: '10px',
    backgroundColor: '#016AE9',
    color: '#fff',
    borderRadius: '5px',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#016ABD',
    },
  },
  couponInfoWrapper: {
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: '100%',
    padding: '0 1.5rem 1rem 1.5rem',
  },
  couponInfoTitle: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '21px',
    color: '#19519D',
    padding: '15px 0',
    textAlign: 'left',
  },
  couponCancelBtn: {
    fontFamily: 'Poppins SemiBold',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '21px',
    color: '#19519D',
    padding: '15px 0',
    textAlign: 'right',
    cursor: 'pointer',
  },
  couponInfoBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '1rem',
    minHeight: '100px',
    width: '100%',
    color: 'black',
  },
  couponName: {
    fontSize: '14.5px',
    lineHeight: '21px',
    border: 'none',
    fontWeight: '600',
    color: '#000',
    padding: '.5rem 0',
    fontFamily: 'Poppins SemiBold',
  },
  tableBodyCellBold: {
    fontWeight: 'bold',
  }
}))

export { useStyles }