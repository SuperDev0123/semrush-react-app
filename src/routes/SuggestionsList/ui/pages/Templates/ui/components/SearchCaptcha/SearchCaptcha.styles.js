import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modalBack: {
    backdropFilter: 'blur(25px)',
  },
  modalRoot: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '380px',
    overflow: 'hidden',
    borderRadius: '5px',
    padding: '25px 40px',    
  },
  modalClose: {
    color: '#FFF',
    padding: '0',
    zIndex: '1',
  },
  modalFooter: {
    margin: '15px 0 5px',
  },
  modalActions: {
    width: '100%',
    backgroundColor: '#FFF',
    fontWeight: '600',
    color: '#016AE9',
    padding: '14px',
    zIndex: '1',
    '&:hover': {
      backgroundColor: '#F7F7F7',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem',
      fontSize: '20px',
      lineHeight: '20px',
    },
  },
  ModalBlueAction: {
    backgroundColor: '#016AE9',
    color: '#FFF',
    '&:hover': {
      backgroundColor: 'rgb(4, 95, 205)',
    },
  },
}))

export default useStyles
