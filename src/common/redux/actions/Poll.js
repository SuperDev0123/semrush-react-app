import {
  CREATE_POLL,
  CLEAR_POLL,
  ADD_AUDIENCE,
  CLEAR_AUDIENCE,
  SUBSCRIBE_TO_PLAN,
  UNSUBSCRIBE,
  INIT_POLL_LIST,
  GET_POLL_LIST_PENDING,
  GET_POLL_LIST_SUCCESS,
  GET_POLL_LIST_ERROR,
} from '@src/@jumbo/constants/ActionTypes'
import { instanceAxios } from '@src/common/config/axios'
import { Toaster } from '@src/common/components'

export const createPoll = (pollData) => {
  return {
    type: CREATE_POLL,
    payload: pollData,
  }
}

export const clearPoll = (pollObj = null) => {
  return {
    type: CLEAR_POLL,
    payload: pollObj,
  }
}
export const clearAudience = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUDIENCE,
  })
}

export const addAudience = (audience) => (dispatch) => {
  dispatch({
    type: ADD_AUDIENCE,
    payload: audience,
  })
}

export const subscribe = (subscribed) => (dispatch) => {
  dispatch({
    type: SUBSCRIBE_TO_PLAN,
    payload: subscribed,
  })
}

export const unsubscribe = () => (dispatch) => {
  dispatch({
    type: UNSUBSCRIBE,
    payload: false,
  })
}

export const getPollList = (params) => (dispatch) => {
//   const token = localStorage.getItem('token')
//   if (!token) {
//     const token = localStorage.getItem('token')
//     instanceAxios.defaults.headers.common.Authorization = 'Bearer ' + token
//   }
  if (params.page === 1) {
    dispatch({ type: INIT_POLL_LIST })
  }
  dispatch({ type: GET_POLL_LIST_PENDING })
  instanceAxios
    .get('v1/polls', {
      params: {
        ...params,
      },
    })
    .then((res) => {
      dispatch({ type: GET_POLL_LIST_SUCCESS, payload: res.data || [] })
    })
    .catch((error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 4000,
        }
      )
      dispatch({ type: GET_POLL_LIST_ERROR })
    })
}

// export const getPollResponses = (id, params) => (dispatch) => {
//     const token =
// }
