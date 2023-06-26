import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  checkIcon: {
    fontSize: 30,
    marginTop: 5,
  },
  iconGrid: {
    display: 'flex',
    alignItems: 'center',
  },
  optionBox: {
    width: '100%',
    position: 'relative',
    '& .input-label': {
      padding: '22px 11px',
      position: 'relative',
      '& .action-btn': {
        position: 'absolute',
        right: 12,
        bottom: 12,
      },
    },
    '& .input-label,& label': {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
  },
  textHolder: {
    minHeight: 85,
    margin: '0 7px',
    width: 'calc(100% - 30px)',
    borderRadius: '0 0 10px 10px',
    display: 'grid',
    '& .MuiFormControl-fullWidth': {
      width: '100%',
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
    },
  },
}))

export { useStyles }
