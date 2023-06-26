import {
  CLEAR_GLOBAL_ERROR,
  SET_GLOBAL_ERROR,
} from '@src/@jumbo/constants/ActionTypes'

export const setGlobalError = (errorObject) => (dispatch) => {
  return dispatch({ type: SET_GLOBAL_ERROR, payload: errorObject })
}

export const clearGlobalError = () => (dispatch) => {
  return dispatch({ type: CLEAR_GLOBAL_ERROR, payload: null })
}
