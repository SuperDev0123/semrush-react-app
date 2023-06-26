import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchProfile } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { notificationData } from '@src/common/redux/actions/Notification'
import { setAuthUser, updateLoadUser } from '@src/common/redux/actions/Auth'
import { Storage } from '@src/routes/PollCreation/common/services'
import { browserRoutes } from '../../browserRoutes'
import { getAttemptURL } from '../../functions/tools'
import { Toaster } from '@src/common/components'

const useAuthUserQuery = ({ enabled, token }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const copiedToken = token || Storage.get('token')
  const isSpecialPages =
    window.location.pathname.includes(browserRoutes.ACCOUNT_CONFIRMATION()) ||
    window.location.pathname === browserRoutes.SIGN_IN()

  return useQuery({
    queryFn: () => fetchProfile(token),
    queryKey: queryKeys.AUTHENTICATION_FETCH_PROFILE,
    staleTime: 0,
    cacheTime: 0,
    enabled: enabled || (!!copiedToken && !isSpecialPages),
    onSuccess: (data) => {
      let newData = {
        email: null,
        name: null,
        user_name: null,
        user_email: null,
        created_at: new Date(),
        "subdomain": "intercom", // Put quotes around text strings
      }

      if (data.email) {
        newData = {
          ...newData,
          email: data.email,
          name: data.name,
          user_name: data.name,
          user_email: data.email,
        }
      }
      window.Intercom &&
        window.Intercom('update', {
          ...newData,
        })
      dispatch(setAuthUser(data))
      dispatch(notificationData(data.unread_notifications))

      const attemptURL = getAttemptURL()
      attemptURL && history.push(attemptURL)
    },
    onSettled: () => {
      dispatch(updateLoadUser(true))
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText
      )
    },
  })
}

export default useAuthUserQuery
