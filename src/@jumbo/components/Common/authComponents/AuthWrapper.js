import React from 'react'
import { Box } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  authWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // background: "white",
    position: 'relative',
    padding: 20,
    fontFamily: 'Poppins',
    marginTop: 40,
    [theme.breakpoints.up('sm')]: {
      padding: 40,
    },
    [theme.breakpoints.up('xs')]: {
      padding: 0,
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      //   backgroundColor: 'white',
    },
  },
  authCard: {
    position: 'relative',
    zIndex: 3,
    maxWidth: (props) => (props.variant === 'default' ? '850px' : '520px'),
    width: '100%',
    boxShadow:
      '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: (props) => (props.variant === 'default' ? '1050px' : '750px'),
    },
  },
}))

const AuthWrapper = ({ children, variant }) => {
  const classes = useStyles({ variant })
  return (
    <Box className={classes.authWrap}>
      <Box className={classes.authCard}>{children}</Box>
    </Box>
  )
}

export default AuthWrapper
