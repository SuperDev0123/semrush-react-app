import { makeStyles } from '@material-ui/core'

const useTextFieldStyles = makeStyles((theme) => ({
  textFieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  textFieldLabel: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#000000',
    marginBottom: '6px',
  },
  textField: {
    '&.MuiTextField-root': {
      width: '100%',
      height: '41px',
    },
    '& .MuiInputBase-root': {
      display: 'flex',
      width: '100%',
      height: '100%',
      minHeight: '100%',
      background: '#FFFFFF',
      border: '1px solid rgba(0, 0, 0, 0.35)',
      boxSizing: 'border-box',
      borderRadius: '5px',
      fontFamily: "'Poppins'",
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      '&.Mui-focused': {
        '&:before, &:after': {
          display: 'none',
        },
      },
      '& > .MuiInputAdornment-root': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '14px',

        '& button': {
          background: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
        },
      },
    },
    '& .MuiInputBase-input': {
      display: 'flex',
      height: '100%',
      width: '100%',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: 0,
      paddingBottom: 0,
      color: '#000',
      '::placeholder': {
        color: 'rgba(0, 0, 0, 0.35)',
      },
      ':-ms-input-placeholder': {
        color: 'rgba(0, 0, 0, 0.35)',
      },
      '::-ms-input-placeholder': {
        color: 'rgba(0, 0, 0, 0.35)',
      },
    },
    '& .MuiInput-underline:after, & .MuiInput-underline:before': {
      display: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline.Mui-error': {
      borderColor: '#F44336',
    },
  },
}))

export default useTextFieldStyles
