import axios from 'axios'

import { store } from '@src/App'
import { setAuthUser } from '@src/common/redux/actions/Auth'
import { browserRoutes } from '@src/common/browserRoutes'
import {
  clearPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import { SET_GLOBAL_ERROR } from '@src/@jumbo/constants/ActionTypes'
import { isPublicURL } from '@src/common/functions/tools'
import { setAttemptURL } from '../functions/tools'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

export const instanceAxios = axios.create({
  baseURL: `${process.env.MIX_API_URL}/api/`, // YOUR_API_URL HERE
  // baseURL: `https://dev.pollthepeople.app/api/`,
  headers: {
    'Content-Type': 'application/json',
  },
})

instanceAxios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    const dispatch = store.dispatch

    if (error.response.status === 401) {
      if (!isPublicURL()) {
        const currentCount = StorageTTL.get('currentCount') ?? 0
        localStorage.clear()
        StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
      }
      dispatch(setAuthUser(null))
      dispatch(clearPoll())
      dispatch(clearAudience())
      dispatch(unsubscribe())
      if (!isPublicURL()) {
        setAttemptURL().then(() => {
          window.location.href = browserRoutes.SIGN_IN()
        })
      }
      return Promise.reject(error)
    }

    if (error.response) {
      store.dispatch({
        type: SET_GLOBAL_ERROR,
        payload: {
          error_code: error.response.data.error_code || '',
          message: error.response.data.message || '',
          title: error.response.data.title || '',
          httpStatus: error.response.status,
        },
      })
    }

    return Promise.reject(error)
  }
)
