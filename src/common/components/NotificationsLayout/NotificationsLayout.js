import React, { useContext } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import { NotificationsContext } from '@src/common/context/Notifications'

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />

const NotificationsLayout = ({ children }) => {
  const { notifications, removeNotification } = useContext(NotificationsContext)

  return (
    <>
      {children}
      {notifications.map(({ id, title, variant, LinkComponent }) => (
        <Snackbar
          key={id}
          autoHideDuration={6000}
          open={true}
          onClose={() => removeNotification(id)}
        >
          <Alert onClose={() => removeNotification(id)} severity={variant}>
            {title} {!!LinkComponent && <LinkComponent />}
          </Alert>
        </Snackbar>
      ))}
    </>
  )
}

export default NotificationsLayout
