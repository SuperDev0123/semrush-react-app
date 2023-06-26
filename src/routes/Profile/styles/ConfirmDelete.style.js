import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  modalRoot: {
    padding: '0 10px',
  },
  imageSection: {
    position: 'relative',
    width: 'fit-content',
  },
  circle: {
    height: '62px',
    width: '62px',
    borderRadius: '100%',
    background: '#F7F7F7',
  },
  userIcon: {
    position: 'absolute',
    right: '-24px',
    top: '15px',
  },
  title: {
    fontSize: '24px',
    marginTop: '26px',
    fontFamily: 'Poppins SemiBold',
    color: 'rgba(25, 81, 157, 1)',
  },
  description: {
    fontSize: '14px',
    fontFamily: 'Poppins Regular',
    color: '#000',
    marginBottom: '22px',
    marginTop: '11px',
  },
  controlLabel: {
    marginBottom: '11px',
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
    color: theme.palette.common.black,
  },

  // input root
  root: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E5E5E5',
      },
      '&:hover fieldset': {
        borderColor: '#E5E5E5',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid black',
        boxShadow: 'none',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '13.5px 14px',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Poppins Regular',
      fontSize: '14px',
      color: theme.palette.common.black,
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },
  primaryButton: {
    marginTop: '16px',
    fontSize: '15px',
    color: theme.palette.common.white,
    fontFamily: 'Poppins SemiBold',
    textTransform: 'none',
    backgroundColor: '#016AE9',
    padding: '0.5rem 1.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#0246f3ed',
    },
  },

  // delete modal
  modal: {
    padding: '11px 20px 32px !important',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: '18px',
    color: theme.palette.common.black,
    fontFamily: 'Poppins Bold',
  },
  icon: {
    fontSize: '18px',
    color: theme.palette.common.black,
  },
  cancelModalActionsBox: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '2.5rem',
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
}))

export default useStyle
