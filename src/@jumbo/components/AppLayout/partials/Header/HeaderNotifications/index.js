import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import PerfectScrollbar from 'react-perfect-scrollbar'
import clsx from 'clsx'
import { FiBell } from 'react-icons/fi'

import {
  Box,
  IconButton,
  Popover,
  Tooltip,
  useTheme,
  Typography,
  Badge,
} from '@material-ui/core'

import CmtCardHeader from '@src/@coremat/CmtCard/CmtCardHeader'
import CmtCardContent from '@src/@coremat/CmtCard/CmtCardContent'
import { CurrentAuthMethod } from '@src/@jumbo/constants/AppConstants'
import CmtList from '@src/@coremat/CmtList'
import CmtCard from '@src/@coremat/CmtCard'
import queryKeys from '@src/common/queryKeys'
import { markAllReadNotification } from '@src/common/api'
import { updateLoadUser } from '@src/common/redux/actions/Auth'
import { Toaster } from '@src/common/components'

import NotificationItem from './NotificationItem'
import { useHeaderNotificationsStyles } from './styles'

const actions = [
  {
    label: 'Mark All As Read',
  },
]

const HeaderNotifications = ({ method = CurrentAuthMethod }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const classes = useHeaderNotificationsStyles()

  const [counter, setCounter] = React.useState()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [headerNotifications, setHeaderNotifications] = React.useState([])
  const notificationDataList = useSelector((state) => state.notificationGetData)

  const markAllReadMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_MARK_ALL_READ_NOTIFICATION,
    mutationFn: markAllReadNotification,
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(updateLoadUser(true))
    },
  })

  useEffect(() => {
    setCounter(notificationDataList.notificationData.length)
    setHeaderNotifications(notificationDataList.notificationData)
  }, [])

  const onOpenPopOver = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const onClosePopOver = () => {
    setAnchorEl(null)
  }
  const markAllRead = (value) => {
    if (value.label === 'Mark All As Read') {
      if (markAllReadNotification.isLoading) return
      markAllReadMutation.mutate(null)
      // setAnchorEl(event.currentTarget)
      setCounter(0)
      setAnchorEl(null)
    }
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <Box pr={2}>
      <Tooltip title="Notifications">
        <IconButton
          onClick={onOpenPopOver}
          className={clsx(classes.iconRoot, 'Cmt-appIcon', {
            active: counter > 0,
          })}
        >
          <Badge
            badgeContent={counter}
            classes={{ badge: classes.counterRoot }}
          >
            <FiBell style={{ color: '#200E32', fontSize: '1.7rem' }} />
            {/* <NotificationsIcon style={{ color: "#200E32" }} /> */}
          </Badge>
        </IconButton>
      </Tooltip>

      <Popover
        className={classes.popoverRoot}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClosePopOver}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        disableScrollLock
      >
        <CmtCard className={classes.cardRoot}>
          <CmtCardHeader
            title={
              <Typography className={classes.cardHeader} variant="h4">
                Notifications
              </Typography>
            }
            actionsPos="top-corner"
            actions={actions}
            actionHandler={(value) => markAllRead(value)}
            separator={{
              color: theme.palette.borderColor.dark,
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          />
          <CmtCardContent>
            {headerNotifications.length > 0 ? (
              <PerfectScrollbar className={classes.scrollbarRoot}>
                <CmtList
                  data={headerNotifications}
                  renderRow={(item, index) => (
                    <NotificationItem
                      key={index}
                      item={item.data.pollCreateNotifaction}
                      date={item.created_at}
                    />
                  )}
                />
              </PerfectScrollbar>
            ) : (
              <Box p={6}>
                <Typography variant="body2">No notifications found</Typography>
              </Box>
            )}
          </CmtCardContent>
        </CmtCard>
      </Popover>
    </Box>
  )
}

export default HeaderNotifications
