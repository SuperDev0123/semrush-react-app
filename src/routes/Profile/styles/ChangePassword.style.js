import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: '25px',
  },
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
}))

export default useStyle
