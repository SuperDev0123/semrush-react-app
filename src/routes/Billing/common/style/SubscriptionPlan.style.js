import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  parentBox: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    width: '100%',
    padding: '2rem',
  },
  blockheaderBox: {
    paddingBottom: '1rem',
  },
  blockHeader: {
    color: '#19519D',
    fontWeight: '600',
    lineHeight: '21px',
    fontSize: '16px',
    fontFamily: 'Poppins SemiBold',
  },
  blockSubHeader: {
    color: '#000',
    fontSize: '16px',
    lineHeight: '21px',
    marginTop: '18px',
    fontFamily: 'Poppins SemiBold',
  },
  planBox: {
    backgroundColor: '#fff',
    border: '1px solid #E5E5E5',
    boxShadow: '0 0 15px rgba(0, 0, 0, .1)',
    borderRadius: '5px',
    maxWidth: '400px',
  },
  planHeaderBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  planName: {
    fontSize: '16px',
    lineHeight: '21px',
    color: '#000',
    fontFamily: 'Poppins Bold',
  },
  planPrice: {
    color: '#000',
    lineHeight: '21px',
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
  },
  planFeaturesBox: {
    backgroundColor: '#F7F7F7',
    padding: '1rem 1.5rem',
  },
  planFeatureListItem: {
    color: '#000',
    fontSize: '.813rem',
    lineHeight: '20px',
  },
  planActionBox: {
    backgroundColor: '#016AE9',
    borderRadius: '0 0 5px 5px',
  },
  planActionButton: {
    width: '100%',
    textTransform: 'none',
    color: '#fff',
  },
  controlBox: {
    width: '75%',
    textAlign: 'justify',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  hintText: {
    color: '#000',
    lineHeight: '18px',
    fontSize: '13px',
    fontFamily: 'Poppins Regular',
  },
  cancelActionButton: {
    color: '#FF0700',
    padding: '0',
    marginTop: '1rem',
    textTransform: 'none',
    textDecorationLine: 'underline',
    fontSize: '12px',
    lineHeight: '18px',
    backgroundColor: '#0000',
    '&:hover': {
      backgroundColor: '#0000',
    },
  },
  resumeActionBox: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    marginTop: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#045ac3',
    },
  },
  cancelModalBox: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    padding: '2rem',
    boxShadow: '0 4px 60px rgba(0, 0, 0, .25)',
  },
  cancelModalTitle: {
    color: '#000',
    lineHeight: '27px',
    marginBottom: '1rem',
    fontFamily: 'Poppins Bold',
    fontSize: '18px',
  },
  cancelModalDescription: {
    color: '#000',
    fontSize: '14px',
    lineHeight: '25.75px',
    fontFamily: 'Poppins Regular',
  },
  cancelModalActionsBox: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '3rem',
  },
  cancelModalCancelAction: {
    width: '50%',
    color: '#000',
    fontSize: '15px',
    lineHeight: '20px',
    fontFamily: 'Poppins Bold',
    textTransform: 'none',
  },
  cancelModalAcceptAction: {
    backgroundColor: '#FF0700',
    color: '#fff',
    borderRadius: '5px',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    width: '50%',
    fontSize: '15px',
    lineHeight: '20px',
    textTransform: 'none',
    fontFamily: 'Poppins Bold',
    '&:hover': {
      backgroundColor: '#CB0700',
    },
  },
  featureListItemIcon: {
    color: '#016AE9',
  },
  listText: {
    '& span': {
      color: '#000',
      fontFamily: 'Poppins Regular',
      fontSize: '13.5px',
      lineHeight: '19.5px',
    },
  },
}))

export default useStyles
