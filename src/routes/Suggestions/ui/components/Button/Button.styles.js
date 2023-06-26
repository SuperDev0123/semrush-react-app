import { makeStyles } from '@material-ui/core'

const useButtonStyles = makeStyles((theme) => ({
  button: {
    width: '173px',
    height: '53px',
    fontFamily: "'Poppins'",
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
    color: '#016AE9',
    background: '#FFFFFF',
    border: '1px solid #016AE9',
    boxSizing: 'border-box',
    borderRadius: '5px',
    textTransform: 'initial',

    '&.btn-contained': {
      color: '#FFF',
      backgroundColor: '#016AE9',
    },
  },
}))

export default useButtonStyles
