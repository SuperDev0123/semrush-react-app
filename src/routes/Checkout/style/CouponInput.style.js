import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modalBack: {
    backdropFilter: 'blur(25px)',
  },
  modalBox: {
    '& .MuiDialog-container .MuiPaper-root': {
      minWidth: '40%',
    },
  },
  modalBoxHide: {
    display: 'none',
  },
  modalHeaderBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1rem 2rem 0',
  },
  modalHeaderTitle: {
    padding: '0',
    '& .MuiTypography-root': {
      fontSize: '18px',
      fontFamily: 'Poppins Bold',
      color: '#000',
      lineHeight: '27px',
    },
  },
  modalHeaderClose: {
    color: '#200E32',
    padding: '0',
    minWidth: 'auto',
  },
  modalBodyBox: {
    color: 'black',
    padding: '1rem 2rem',
  },
  modalBoxHidden: {
    display: 'none',
  },
  promoInputTitle: {
    fontSize: '14.5px',
    lineHeight: '21px',
    border: 'none',
    fontWeight: '600',
    color: '#000',
    padding: '1rem .5rem .5rem 0',
    fontFamily: 'Poppins SemiBold',
  },
  multiInputBase: {
    flex: 1,
    color: 'black',
    '& input': {
      padding: '10px 20px',
    }
  },
  couponInputItem: {
    display: 'flex',
    flex: 1,
  },
  couponInfoBox: {
    display: 'flex',
    backgroundColor: '#F7F7F7',
    borderRadius: '5px',
    padding: '1rem',
    margin: '1rem 0',
    minHeight: '100px',
    width: '100%',
  },
  couponButton: {
    width: '100%',
    height: '100%',
    backgroundColor: '#929292',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
    textTransform: 'inherit',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
  couponButtonBlue: {
    width: '100%',
    height: '100%',
    backgroundColor: '#016AE9',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
    textTransform: 'inherit',
    paddingRight: '2rem',
    paddingLeft: '2rem',
  },
  validateBtn: {
    minWidth: '120px',
    marginLeft: '7px',
  },
  cancelBtn: {
    backgroundColor: '#FEFEFE',
    height: '50px',
    color: 'black',
    '& hover': {
      backgroundColor: '#EFEFEF',
    }
  },
  couponModalFooter: {
    margin: '20px 0',
    height: '50px',
  },
  warningText: {
    color: '#FF0700',
  },
  successText: {
    marginBottom: '50px',
    paddingRight: '20px',
  },
  infoText: {
    paddingRight: '20px',
  }
}))

export default useStyles
