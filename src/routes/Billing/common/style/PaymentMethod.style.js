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
    lineHeight: '21px',
    fontFamily: 'Poppins SemiBold',
    fontSize: '16px',
  },
  blockSubHeader: {
    color: '#000',
    lineHeight: '21px',
    marginTop: '18px',
    fontSize: '16px',
    fontFamily: 'Poppins SemiBold',
  },
  cardInfo: {
    display: 'flex',
    width: '50%',
    backgroundColor: '#F7F7F7',
    borderRadius: '5px',
    padding: '1rem',
    marginBottom: '1rem',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  cardBrand: {
    display: 'flex',
    flexGrow: '.1',
  },
  cardNumber: {
    color: '#000',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Poppins Bold',
  },
  updateButton: {
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
  skeleton: {
    marginBottom: '.5rem',
  },
}))

export default useStyles
