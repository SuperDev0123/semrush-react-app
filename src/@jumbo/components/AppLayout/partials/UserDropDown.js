import React from 'react'
import { useMutation } from 'react-query'
import clsx from 'clsx'
import { useHistory } from 'react-router'
import { Box, alpha, makeStyles } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import CmtDropdownMenu from '@src/@coremat/CmtDropdownMenu'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import { logout } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { browserRoutes } from '@src/common/browserRoutes'
import { Toaster } from '@src/common/components'
import { useAuthUserQuery } from '@src/common/hooks'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { FaRegMoneyBillAlt, FaRegUser } from 'react-icons/fa'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

const useStyles = makeStyles((theme) => ({
  profileRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    position: 'relative',
    borderLeft: 0,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
    },
    '&:before': {
      display: 'none',
      content: '""',
      position: 'absolute',
      left: 0,
      top: 2,
      zIndex: 1,
      height: 35,
      width: 1,
      backgroundColor: alpha(theme.palette.common.dark, 0.15),
    },
  },
  profileIcon: {
    fontSize: '1.2rem',
    marginRight: '4px',
  },
  billingIcon: {
    fontSize: '1.5rem',
  },
  changeAccountIcon: {
    fontSize: '1.5rem',
    marginRight: '-3px',
  },
}))

const getUserDropdown = (isAdmin, classes) => {
  const actionList = [
    {
      icon: <FaRegUser className={classes.profileIcon} />,
      label: 'Profile',
    },
    {
      icon: <FaRegMoneyBillAlt className={classes.billingIcon} />,
      label: 'Billing',
    },
    {
      icon: <ExitToAppIcon />,
      label: 'Logout',
    },
  ]
  if (isAdmin) {
    return [
      {
        icon: <MdOutlineManageAccounts className={classes.changeAccountIcon} />,
        label: 'Change account',
      },
      ...actionList,
    ]
  }
  return actionList
}

const UserDropDown = () => {
  const classes = useStyles()
  const history = useHistory()
  const userDetail = useAuthUserQuery(true, localStorage.getItem('token')).data
  const isUserAdmin = !!userDetail.is_admin

  const logoutMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_LOGOUT,
    mutationFn: logout,
    onSuccess: () => {
      const currentCount = StorageTTL.get('currentCount') ?? 0
      localStorage.clear()
      StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
      history.push(browserRoutes.SIGN_IN())
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

  const onItemClick = (item) => {
    if (item.label === 'Logout') {
      if (logoutMutation.isLoading) return
      logoutMutation.mutate(null)
    }

    if (item.label === 'Billing') {
      history.push(browserRoutes.BILLING())
    }

    if (item.label === 'Change account') {
      history.push(browserRoutes.CHANGE_ACCOUNT())
    }
    if (item.label === 'Profile') {
      history.push(browserRoutes.PROFILE())
    }
  }

  return (
    <Box className={clsx(classes.profileRoot, 'Cmt-profile-pic')}>
      <CmtDropdownMenu
        onItemClick={onItemClick}
        TriggerComponent={
          <CmtAvatar
            size="small"
            src={
              userDetail.profile_image_url
                ? `${process.env.MIX_APP_URL}${userDetail.profile_image_url}`
                : ''
            }
            alt={userDetail != null ? userDetail.name : ''}
          />
        }
        items={getUserDropdown(isUserAdmin, classes)}
      />
    </Box>
  )
}

export default UserDropDown
