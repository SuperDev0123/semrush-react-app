import { makeStyles } from '@material-ui/core/styles'

export const useHeaderCreateStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  strong: {
    color: '#0A3D80',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '5px',
    cursor: 'pointer',
  },
  flatBtn: {
    borderRadius: '.2rem',
    boxShadow: 'none',
    backgroundColor: '#016AE9',
    fontFamily: 'Poppins SemiBold',
    fontSize: '14px',
    lineHeight: '17px',
    margin: '0 35px',
    padding: '12px 12px',
    minWidth: 135,
    '&:hover': {
      backgroundColor: '#0e72eb',
    },
    '& span': {
      fontWeight: 500,
      color: '#ffffff',
      textTransform: 'initial',
    },
    '& svg': {
      fontSize: '1.4rem',
      position: 'relative',
      left: '-3px',
      [theme.breakpoints.down('sm')]: {
        left: 0,
      },
    },
  },
  iconButton: {
    backgroundColor: '#016AE9',
    fontSize: '1rem',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#0e72eb',
    },
  },
}))
