import React, { useContext, useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import { Box, alpha, Hidden, Typography } from '@material-ui/core'

import makeStyles from '@material-ui/core/styles/makeStyles'
import clsx from 'clsx'
import { useHistory, useLocation } from 'react-router'

import SidebarToggleHandler from '@src/@coremat/CmtLayouts/Vertical/SidebarToggleHandler'
import { When } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import AppContext from '../../../contextProvider/AppContextProvider/AppContext'
import HeaderNotifications from './HeaderNotifications'
import UserDropDown from '../../partials/UserDropDown'
import HeaderCreate from './HeaderCreate'
import Stepper from './Stepper'
import GuestHeaderItems from '@src/routes/Guest/ui/partials/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    '&.insideNav': {
      display: 'flex',
      padding: '0 10px',
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },
  searchRoot: {
    position: 'relative',
    width: 260,
    [theme.breakpoints.up('md')]: {
      width: 350,
    },
    '& .MuiSvgIcon-root': {
      position: 'absolute',
      left: 18,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1,
    },
    '& .MuiInputBase-root': {
      width: '100%',
    },
    '& .MuiInputBase-input': {
      height: 43,
      borderRadius: 30,
      backgroundColor: '#F4F4F4',
      color: '#C8C8C8',
      fontWeight: 400,
      boxSizing: 'border-box',
      padding: '5px 15px 5px 50px',
      transition: 'all 0.3s ease',
      '&:focus': {
        backgroundColor: '#F4F4F4',
        color: '#D2D2D2',
      },
    },
  },
  langRoot: {
    minHeight: 72,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 15,
    borderRadius: 5,
    paddingRight: 15,
    position: 'relative',
  },
  iconBtn: {
    color: alpha(theme.palette.common.white, 0.38),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },

  navLogo: {
    display: 'flex',
  },
  settingsIcon: {
    color: '#d2d2d2',
    marginRight: 15,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
    },
  },
  navigationContainer: {
    display: 'flex',
    color: theme.palette.common.black,
    width: '200px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '10%',
  },
  navigationItem: {
    fontSize: '1rem',
    cursor: 'pointer',
    fontFamily: 'Poppins Regular',
  },
  navigationItemActive: {
    fontFamily: 'Poppins Bold',
  },
}))

const findAuthUrl = (url, setIsAuthUrls) => {
  const urls = [
    browserRoutes.SIGN_IN(),
    browserRoutes.SIGN_UP(),
    browserRoutes.FORGOT_PASSWORD(),
    browserRoutes.LINK404(),
  ]
  setIsAuthUrls(urls.indexOf(url.pathname) !== -1)
}

const Header = ({ isSharedResult }) => {
  const classes = useStyles()
  const location = useLocation()
  const [isActive, setIsActive] = useState(false)
  const [isAuthUrls, setIsAuthUrls] = useState(false)
  const node = useRef()
  const { hasHeaderStepper, activeStep } = useContext(AppContext)
  const history = useHistory()

  const handleClick = () => {
    setIsActive((currIsActive) => !currIsActive)
    if (!isActive) {
      document.addEventListener('click', handleOutsideClick, false)
    }
  }

  const handleOutsideClick = (e) => {
    if (!node.current.contains(e.target)) {
      document.removeEventListener('click', handleOutsideClick, false)
      setIsActive((currIsActive) => !currIsActive)
    }
  }
  useEffect(() => {
    findAuthUrl(location, setIsAuthUrls)
  }, [location])
  return (
    <Toolbar className={classes.root}>
      <NavLink to={browserRoutes.HOME()} className={classes.navLogo}>
        <img src={'/images/logo-horizontal-color.png'} />
      </NavLink>
      <When condition={!isAuthUrls}>
        <When condition={!isSharedResult}>
          <Hidden smDown>
            <Box className={classes.navigationContainer}>
              <Typography
                className={
                  history.location.pathname === browserRoutes.DASHBOARD()
                    ? clsx(classes.navigationItem, classes.navigationItemActive)
                    : classes.navigationItem
                }
                onClick={() => {
                  history.push(browserRoutes.DASHBOARD())
                }}
              >
                Dashboard
              </Typography>
              <Typography
                className={
                  history.location.pathname === browserRoutes.BILLING()
                    ? clsx(classes.navigationItem, classes.navigationItemActive)
                    : classes.navigationItem
                }
                onClick={() => {
                  history.push(browserRoutes.BILLING())
                }}
              >
                Billing
              </Typography>
            </Box>
          </Hidden>
          <Box flex={1} />
          <When condition={hasHeaderStepper}>
            <Hidden smDown>
              <Box pr={3}>
                <Stepper presState={activeStep} />
              </Box>
            </Hidden>
          </When>
          <Box flex={1} />
          <HeaderCreate
            isActive={isActive}
            handleClick={handleClick}
            node={node}
          />
          <HeaderNotifications />
          <Hidden smDown>
            <UserDropDown />
          </Hidden>
          <Hidden mdUp>
            <SidebarToggleHandler
              edge="start"
              color="inherit"
              aria-label="menu"
            />
          </Hidden>
        </When>
        <When condition={isSharedResult}>
          <GuestHeaderItems />
        </When>
      </When>
    </Toolbar>
  )
}

export default Header
