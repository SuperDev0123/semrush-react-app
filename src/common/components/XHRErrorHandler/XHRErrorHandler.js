import * as React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import pt from 'prop-types'

import { useChangeSettings } from '@src/common/hooks'
import { XHRErrorFactory } from '@src/common/functions/errorHandler'
import { NotificationsContext } from '@src/common/context/Notifications'

const XHRErrorHandler = ({ children }) => {
  const history = useHistory()
  const { globalError } = useSelector((state) => state.errorHandler)
  const { addNotification } = React.useContext(NotificationsContext)
  const changeSettingsMutation = useChangeSettings()

  React.useEffect(() => {
    if (globalError) {
      XHRErrorFactory({
        globalError,
        addNotification,
        history,
        changeSettingsMutation,
      })
    }
  }, [globalError])
  return children
}

XHRErrorHandler.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
}

export default XHRErrorHandler
