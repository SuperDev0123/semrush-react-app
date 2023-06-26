import axios from 'axios'
import { fetchStart, fetchSuccess } from './Common'
import {
  SET_DASHBOARD_DATA,
  OPEN_SET_UP_MODAL,
  CLOSE_SET_UP_MODAL,
} from '../../../@jumbo/constants/ActionTypes'

export const fetchDashboardData = () => {
  return (dispatch) => {
    dispatch(fetchStart())
    axios.get('/users', { params: { searchText: 'John' } }).then(({ data }) => {
      dispatch(fetchSuccess())
      dispatch({
        type: SET_DASHBOARD_DATA,
        payload: data.users,
      })
    })
  }
}

export const openSetupModal = () => (dispatch) => {
  dispatch({ type: OPEN_SET_UP_MODAL })
}
export const closeSetupModal = () => (dispatch) => {
  dispatch({ type: CLOSE_SET_UP_MODAL })
}
