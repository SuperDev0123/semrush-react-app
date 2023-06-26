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
  deleteText: {
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
  },
  secondaryButton: {
    marginTop: '15px',
    fontSize: '15px',
    color: theme.palette.common.white,
    fontFamily: 'Poppins SemiBold',
    textTransform: 'none',
    backgroundColor: 'rgba(255, 7, 0, 1)',
    padding: '0.5rem 1.8rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: '#e71a14',
    },
  },
}))

export default useStyle
