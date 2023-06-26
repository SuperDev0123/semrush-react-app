import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  flatBtn: {
    borderRadius: 9,
    boxShadow: 'none',
    backgroundColor: '#0A3D80',
    fontFamily: 'made_tommyregular, sans-serif',
    fontSize: 14,
    lineHeight: '17px',
    marginLeft: 35,
    marginRight: 35,
    padding: '7px 15px',
    minWidth: 135,
    '&:hover': {
      backgroundColor: '#072d5f',
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
    [theme.breakpoints.down('md')]: {
      padding: 6,
      marginLeft: 0,
      marginRight: 0,
      minWidth: 'unset',
      borderRadius: '50%',
      '& .MuiButton-label span': {
        display: 'none',
        marginLeft: 10,
      },
      '& svg': {
        left: 0,
      },
    },
  },
}))

export { useStyles }
