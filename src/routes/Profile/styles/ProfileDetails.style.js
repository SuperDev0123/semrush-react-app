import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  container: {},
  root: {
    padding: '19px 25px 24px',
    boxShadow: '0px 0px 5px 0px rgb(0 0 0 / 10%)',
  },
  title: {
    color: '#19519D',
    marginBottom: '11px',
    fontSize: '16px',
    fontFamily: 'Poppins SemiBold',
    fontWeight: '600',
  },
  formControl: {
    marginBottom: '11px',
  },
  controlLabel: {
    marginBottom: '11px',
    fontSize: '14px',
    fontFamily: 'Poppins SemiBold',
    color: theme.palette.common.black,
  },
  avatarSection: {
    display: 'flex',
    width: '281px',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  uploadInput: {
    display: 'none',
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5px',
  },
  uploadButton: {
    fontSize: '13px',
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    textTransform: 'none',
    backgroundColor: '#E5E5E5',
    padding: '0.5rem 13px',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#d2d5d9 !important',
    },
  },
  maxSizeText: {
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    fontSize: '13px',
    lineHeight: '25px',
  },
  primaryButton: {
    marginTop: '15px',
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
  errorText: {
    color: '#ff0700',
  },
}))

export default useStyle
