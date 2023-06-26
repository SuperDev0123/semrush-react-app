import {
  UPDATE_AUTH_USER,
  UPDATE_LOAD_USER,
} from '../../../@jumbo/constants/ActionTypes'

const INIT_STATE = {
  authUser: {
    name: 'test',
    plan_id: 1,
  },
  loadUser: false,
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case UPDATE_AUTH_USER: {
      return {
        ...state,
        authUser: action.payload,
        loadUser: true,
      }
    }
    case UPDATE_LOAD_USER: {
      return {
        ...state,
        loadUser: action.payload,
      }
    }
    default:
      return state
  }
}
