import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import makeStyles from '@material-ui/core/styles/makeStyles'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useHistory } from 'react-router'

import CmtVertical from '../../../../../@coremat/CmtNavigation/Vertical'
import IntlMessages from '../../../../utils/IntlMessages'

import { logout } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { setAuthUser } from '@src/common/redux/actions/Auth'
import { Toaster } from '@src/common/components'
import {
  clearPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import { browserRoutes } from '@src/common/browserRoutes'
import { FaRegMoneyBillAlt, FaRegUser } from 'react-icons/fa'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

const useStyles = makeStyles((theme) => ({
  perfectScrollbarSidebar: {
    height: '100%',
    transition: 'all 0.3s ease',
    '.Cmt-sidebar-fixed &, .Cmt-Drawer-container &': {},
    '.Cmt-modernLayout &': {
      height: 'calc(100% - 72px)',
    },
    '.Cmt-miniLayout &': {
      height: 'calc(100% - 91px)',
    },
    '.Cmt-miniLayout .Cmt-sidebar-content:hover &': {
      height: 'calc(100% - 167px)',
    },
  },
  billingIcon: {
    fontSize: '1.3rem',
    marginRight: '1rem',
  },
  profileIcon: {
    fontSize: '1.3rem',
    marginRight: '1rem',
  },
  exitIcon: {
    fontSize: '1.3rem',
    marginRight: '1rem',
  },
}))

const SideBar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const logoutMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_LOGOUT,
    mutationFn: logout,
    onSuccess: () => {
      const currentCount = StorageTTL.get('currentCount') ?? 0
      localStorage.clear()
      StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
      dispatch(setAuthUser(null))
      dispatch(clearPoll())
      dispatch(clearAudience())
      dispatch(unsubscribe())
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
  const classes = useStyles()
  const navigationMenus = [
    {
      name: <IntlMessages id={'sidebar.main'} />,
      type: 'section',
      children: [
        {
          name: 'Dashboard',
          icon: <i className="fas fa-home" />,
          type: 'item',
          link: '/dashboard/home',
        },
        {
          name: 'Billing',
          icon: <FaRegMoneyBillAlt className={classes.billingIcon} />,
          type: 'item',
          link: browserRoutes.BILLING(),
        },
        {
          name: 'Profile',
          icon: <FaRegUser className={classes.profileIcon} />,
          type: 'item',
          link: browserRoutes.PROFILE(),
        },
        {
          name: 'Logout',
          icon: <ExitToAppIcon className={classes.exitIcon} />,
          type: 'item',
          link: '/billing',
          onClick: () => {
            if (logoutMutation.isLoading) return
            logoutMutation.mutate(null)
          },
        },
      ],
    },
  ]

  return (
    <PerfectScrollbar className={classes.perfectScrollbarSidebar}>
      <CmtVertical menuItems={navigationMenus} />
    </PerfectScrollbar>
  )
}

export default SideBar
