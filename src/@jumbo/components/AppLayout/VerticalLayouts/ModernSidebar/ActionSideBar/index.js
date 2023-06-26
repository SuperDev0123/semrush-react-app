import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import clsx from 'clsx'
import { Box, alpha, Hidden, IconButton, withWidth } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MessageIcon from '@material-ui/icons/Message'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import SettingsIcon from '@material-ui/icons/Settings'
import CmtDropdownMenu from '@src/@coremat/CmtDropdownMenu'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { makeStyles } from '@material-ui/styles'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import CloseIcon from '@material-ui/icons/Close'
import SidebarToggleHandler from '@src/@coremat/CmtLayouts/Vertical/SidebarToggleHandler'
import LayoutContext from '@src/@coremat/CmtLayouts/Vertical/LayoutContext/LayoutContext'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import Logo from '@src/@jumbo/components/AppLayout/partials/Logo'
import { logout } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { setAuthUser } from '@src/common/redux/actions/Auth'
import {
  clearPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import { Toaster } from '@src/common/components'

import ActionBarDrawer from './ActionBarDrawer'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: '10px 24px 10px 15px',
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'column',
      padding: '16px 5px',
    },
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  iconBtn: {
    position: 'relative',
    color: alpha(theme.palette.common.white, 0.9),
    '&:hover, &:focus': {
      color: theme.palette.common.white,
    },
  },
  counterRoot: {
    color: theme.palette.common.white,
    border: `solid 1px ${theme.palette.common.white}`,
    backgroundColor: theme.palette.warning.main,
    width: 20,
  },
}))

const actionsList = [
  {
    icon: <PersonIcon />,
    label: 'Account',
  },
  {
    icon: <ExitToAppIcon />,
    label: 'Logout',
  },
]

const ActionSideBar = ({ setSidebarWidth, width }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [isDrawerOpen, setDrawerStatus] = useState(false)
  const [activeOption, setActiveOption] = useState(null)
  const { isOpen, setOpen } = useContext(LayoutContext)
  const { sidebarSize } = useContext(AppContext)

  const logoutMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_LOGOUT,
    mutationFn: logout,
    onSuccess: () => {
      const currentCount = StorageTTL.get('currentCount')
      localStorage.clear()
      StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
      dispatch(setAuthUser(null))
      dispatch(clearPoll())
      dispatch(clearAudience())
      dispatch(unsubscribe())
      window.location.reload()
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
    },
  })

  useEffect(() => {
    if (isOpen && (width === 'lg' || width === 'xl')) {
      setSidebarWidth(0)
    } else {
      setSidebarWidth(sidebarSize)
    }
  }, [isOpen, width])

  useEffect(() => {
    if (activeOption && !isDrawerOpen) {
      setDrawerStatus(true)
    }
  }, [activeOption])

  const onItemClick = (item) => {
    if (item.label === 'Logout') {
      if (logoutMutation.isLoading) return
      logoutMutation.mutate(null)
    }
  }

  const onIconClick = (option) => {
    setActiveOption(option)
  }

  const onDrawerClose = () => {
    setDrawerStatus(false)
    setActiveOption(null)
  }

  return (
    <Box className={clsx(classes.root, 'actionSidebar')}>
      <Box display="flex" alignItems="center">
        <SidebarToggleHandler className={classes.iconBtn}>
          {isOpen && (width === 'lg' || width === 'xl') && <CloseIcon />}
        </SidebarToggleHandler>
        <Hidden lgUp>
          <Logo color="white" ml={{ xs: 3, sm: 6 }} />
        </Hidden>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'row', lg: 'column' }}
        ml={{ xs: 'auto', lg: 'unset' }}
      >
        <IconButton
          className={classes.iconBtn}
          onClick={() => onIconClick('search')}
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          className={classes.iconBtn}
          onClick={() => onIconClick('messages')}
        >
          <MessageIcon />
        </IconButton>

        <IconButton
          className={classes.iconBtn}
          onClick={() => onIconClick('notifications')}
        >
          <Badge badgeContent={4} classes={{ badge: classes.counterRoot }}>
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {isOpen && (width === 'lg' || width === 'xl') && (
          <IconButton
            className={classes.iconBtn}
            onClick={() => setOpen(!isOpen)}
          >
            <MoreVertIcon />
          </IconButton>
        )}
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'row', lg: 'column' }}
        mt={{ xs: 'unset', lg: 'auto' }}
      >
        <IconButton
          className={classes.iconBtn}
          onClick={() => onIconClick('settings')}
        >
          <SettingsIcon />
        </IconButton>

        <CmtDropdownMenu
          onItemClick={onItemClick}
          TriggerComponent={
            <CmtAvatar src={'https://via.placeholder.com/150x150'} />
          }
          items={actionsList}
        />
      </Box>

      <ActionBarDrawer
        activeOption={activeOption}
        open={isDrawerOpen}
        onDrawerClose={onDrawerClose}
        onIconClick={onIconClick}
      />
    </Box>
  )
}

export default withWidth()(ActionSideBar)
