import { makeStyles } from '@material-ui/core'

const useTemplateStyles = makeStyles((theme) => ({
  templateWrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: '316px',
    width: '282px',
    marginRight: '20px',
    marginBottom: '20px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)',
  },
  template: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    background: theme.palette.common.white,
    borderRadius: '5px',
  },
  header: {
    width: '100%',
    '& > img': {
      borderRadius: '5px 5px 0 0',
      marginRight: '9px',
      height: '220px',
      width: '282px',
    },
  },
  templateDetails: {
    padding: '9px',
    height: 'auto',
  },
  name: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '16px',
    color: theme.palette.common.black,
  },
  middle: {
    display: 'flex',
    width: '100%',
    '& > p': {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      color: '#929292',
    },
  },
}))

export default useTemplateStyles
