import { makeStyles, styled, InputBase, NativeSelect } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  //   alertError: {
  //     maxWidth: '100% !important',
  //     marginBottom: '3rem'
  //   },
  parentBox: {
    padding: '0 2rem 2rem',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  boxChild: {
    marginTop: '1rem',
    marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      display: 'flex',
    },
  },
  gridMargin: {
    [theme.breakpoints.up('md')]: {
      marginRight: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  },
  formError: {
    color: '#F44336',
    marginLeft: '14px',
    marginRight: '14px',
    fontSize: '.75rem',
  },
  formLabel: {
    color: '#000',
    fontSize: '14px',
    lineHeight: '21px',
    fontFamily: 'Poppins Bold',
  },
  cardsElements: {
    border: '1px solid rgba(0, 0, 0, .35)',
    borderRadius: '5px',
    padding: '1rem 1rem',
    backgroundColor: '#fff',
    width: '100%',
    marginTop: '10px',
  },
  cardsElementsError: {
    borderColor: '#F44336',
  },
  creditCardTip: {
    lineHeight: '183.9%',
    fontSize: '14px',
    color: '#000',
    fontFamily: 'Poppins Regular',
  },
  cancelButton: {
    width: '100%',
    color: '#000',
    fontWeight: '400',
    fontSize: '14px',
    textTransform: 'none',
    lineHeight: '20px',
    backgroundColor: '#0000',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    fontFamily: 'Poppins Regular',
    '&:hover': {
      backgroundColor: '#0000',
    },
  },
  submitButton: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#0362d5',
    },
  },
  alertError: {
    maxWidth: '100% !important',
    margin: '.5rem auto',
  },
}))

const InputElement = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid rgba(0, 0, 0, .35)',
    fontSize: '14px',
    lineHeight: '21px',
    width: '100%',
    padding: '0.5rem 1rem',
    transition: theme.transitions.create(['border-color']),
    fontFamily: 'Poppins Regular',
    '&:focus': {
      borderColor: '#0414ff',
    },
  },
  '&.Mui-error .MuiInputBase-input': {
    borderColor: '#F44336',
  },
}))

const SelectElement = styled(NativeSelect)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiNativeSelect-select': {
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid rgba(0, 0, 0, .35)',
    fontSize: '14px',
    lineHeight: '21px',
    width: '100%',
    padding: '0.5rem 1rem',
    fontFamily: 'Poppins Regular',
    transition: theme.transitions.create(['border-color']),
    '&:focus': {
      borderColor: '#0414ff',
    },
  },
  '&.Mui-error .MuiNativeSelect-select': {
    borderColor: '#F44336',
  },
}))

export { useStyles, InputElement, SelectElement }
