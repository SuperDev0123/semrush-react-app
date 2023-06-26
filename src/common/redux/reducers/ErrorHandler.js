import {
  SET_GLOBAL_ERROR,
  CLEAR_GLOBAL_ERROR,
} from '@src/@jumbo/constants/ActionTypes'

const INITIAL_STATE = {
  globalError: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GLOBAL_ERROR: {
      return {
        ...state,
        globalError: action.payload,
      }
    }
    case CLEAR_GLOBAL_ERROR: {
      return { ...state, globalError: null }
    }
    default:
      return state
  }
}
