import {
  SET_DASHBOARD_DATA,
  OPEN_SET_UP_MODAL,
  CLOSE_SET_UP_MODAL,
} from '../../../@jumbo/constants/ActionTypes'

const INIT_STATE = {
  dashboardData: [],
  setupModal: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_DASHBOARD_DATA: {
      return { ...state, dashboardData: action.payload }
    }
    case OPEN_SET_UP_MODAL: {
      return {
        ...state,
        setupModal: true,
      }
    }
    case CLOSE_SET_UP_MODAL: {
      return {
        ...state,
        setupModal: false,
      }
    }
    default:
      return state
  }
}
