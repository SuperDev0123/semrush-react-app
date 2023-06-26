import React from 'react'
import { useMutation } from 'react-query'
import clsx from 'clsx'
import { Box, MenuItem, Typography } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useAuthUserQuery } from '@src/common/hooks'

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import { logout } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { browserRoutes } from '@src/common/browserRoutes'
import { Toaster } from '@src/common/components'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '25px 16px 12px 16px',
    borderBottom: 'solid 1px rgba(255,255,255,.14)',
    '&.insideNav': {
      borderBottom: 0,
      display: 'flex',
      alignItems: 'center',
      padding: '0 15px',
      '& .makeStyles-userInfo-34': {
        display: 'none',
      },
      '& .Cmt-avatar-size': {
        width: 40,
        height: 40,
      },
    },
  },
  userInfo: {
    paddingTop: 24,
    transition: 'all 0.1s ease',
    height: 75,
    opacity: 1,
    '.Cmt-miniLayout .Cmt-sidebar-content:not(:hover) &': {
      height: 0,
      paddingTop: 0,
      opacity: 0,
      transition: 'all 0.3s ease',
    },
  },
  userTitle: {
    color: theme.palette.sidebar.textDarkColor,
    fontWeight: 500,
  },
  userSubTitle: {
    fontSize: 14,
    fontWeight: 300,
    letterSpacing: 0.25,
    opacity: 0.6,
  },
}))

const SidebarHeader = ({ isHorizontal = false }) => {
  const classes = useStyles()
  const history = useHistory()
  const userDetail = useAuthUserQuery(true, localStorage.getItem('token')).data
  const isUserAdmin = !!userDetail.is_admin

  const logoutMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_LOGOUT,
    mutationFn: logout,
    onSuccess: () => {
      Toaster.success('logout successfully')
      const currentCount = StorageTTL.get('currentCount') ?? 0
      localStorage.clear()
      StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
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

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverOpen = (event, actionBtn) => {
    history.push(browserRoutes.PROFILE())
    if (
      (actionBtn === 'profile' && isHorizontal) ||
      (actionBtn === 'arrow' && !isHorizontal)
    )
      setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const onLogoutClick = () => {
    if (logoutMutation.isLoading) return

    handlePopoverClose()
    logoutMutation.mutate(null)
  }
  const onBilling = () => {
    history.push(browserRoutes.BILLING())
  }

  const onChangeAccount = () => {
    history.push(browserRoutes.CHANGE_ACCOUNT())
  }

  const position = isHorizontal ? 'insideNav' : 'insideSidebar'

  let menuItemChangeUser = null
  if (isUserAdmin) {
    menuItemChangeUser = (
      <MenuItem onClick={onChangeAccount}>
        <ExitToAppIcon />
        <Box ml={2}>Change account</Box>
      </MenuItem>
    )
  }

  return (
    <Box className={clsx(classes.root, position)}>
      <CmtAvatar
        src={
          userDetail.profile_image_url
            ? `${process.env.MIX_APP_URL}${userDetail.profile_image_url}`
            : ''
        }
        alt={userDetail != null ? userDetail.name : ''}
        onClick={(e) => handlePopoverOpen(e, 'profile')}
      />
      <Box
        className={clsx(classes.userInfo, 'sidebar-user-info')}
        onClick={(e) => handlePopoverOpen(e, 'arrow')}
      >
        <Box
          className="pointer"
          display="flex"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <Box mr={2}>
            <Typography
              className={classes.userTitle}
              component="h3"
              variant="h6"
            >
              {userDetail != null ? userDetail.name : 'Anna'}
            </Typography>
            <Typography className={classes.userSubTitle}>
              {userDetail != null ? userDetail.email : 'anna@gmail.com'}
            </Typography>
          </Box>
          {/* <ArrowDropDownIcon /> */}
        </Box>
      </Box>
    </Box>
  )
}

export default SidebarHeader
