import { makeStyles } from '@material-ui/core'

const useNumberFieldStyles = makeStyles((theme) => ({
  numberFieldWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
    '& .info-box': {
      position: 'absolute',
      right: '-22px',
      top: '-5px',
      zIndex: 5,
      fontSize: 19,
      color: theme.palette.primary.dark,
    },
  },
  numberField: {
    '& .MuiInputBase-input': {
      color: '#0A3D80',
      width: '80px',
      height: '26px',
      fontSize: '30px',
      fontStyle: 'normal',
      marginTop: '1px',
      textAlign: 'center',
      fontFamily: "'made_tommymedium',sans-serif",
      fontWeight: 700,
      marginLeft: '5px',
      letterSpacing: '0em',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        height: 'auto',
        paddingTop: '2px',
        paddingBottom: '2px',
        fontSize: '20px',
      },
    },
  },
}))

export default useNumberFieldStyles
