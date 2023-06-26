import { makeStyles } from '@material-ui/core'

const useCriteriaListStyles = makeStyles((theme) => ({
  criteriaList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  alert: {
    marginTop: 14,
    borderRadius: 10,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& .MuiAlert-icon': {
        padding: 0,
        margin: 0,
      },
    },
  },
  divider: {
    display: 'flex',
    width: '100%',
    background: '#E5E5E5',
    height: '1px',
    border: 'none',
    margin: '27px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '12px 0',
    },
  },
  criteriaListItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginBottom: 0,
      marginTop: 15,
    },
  },
  autocompleteWrapper: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginRight: '5px',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: 10,
    },
  },
  trashIcon: {
    color: 'rgba(0, 0, 0, 0.54)',
    cursor: 'pointer',
  },
  trashIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '36px',
  },
  trashIconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}))

export default useCriteriaListStyles
