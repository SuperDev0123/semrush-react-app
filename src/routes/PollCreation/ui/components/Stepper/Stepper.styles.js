import { makeStyles } from '@material-ui/core'

const useStepperStyles = makeStyles((theme) => ({
  stepper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '71px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '60px',
    },
  },
  stepperList: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '100%',
    height: '100%',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: '7px',
      paddingRight: '7px',
    },
  },
  stepperListItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexGrow: 1,
    flexBasis: 1,
    flexShrink: 1,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '27px',
    color: '#FFFFFF',
    cursor: 'pointer',
    '&.active': {
      fontWeight: 700,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
      paddingLeft: '8px',
      paddingRight: '8px',
      paddingTop: 0,
    },
  },
  stepperListItemIcon: {
    marginLeft: '48px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '15px',
    },
  },
}))

export default useStepperStyles
