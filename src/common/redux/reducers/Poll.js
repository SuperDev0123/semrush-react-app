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

const INIT_STATE = {
  pollData: null,
  audience: { response: null, criterias: [] },
  pollList: {
    data: [],
    loading: false,
    total: 10,
    current_page: 1,
    last_page: 1,
  },
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CREATE_POLL: {
      return {
        ...state,
        pollData: {
          ...state.pollData,
          ...action.payload,
        },
      }
    }
    case CLEAR_POLL: {
      return {
        ...state,
        pollData: action.payload ? action.payload : null,
      }
    }
    case CLEAR_AUDIENCE: {
      return {
        ...state,
        audience: { response: null, criterias: [] },
      }
    }
    case ADD_AUDIENCE: {
      return {
        ...state,
        audience: action.payload,
      }
    }
    case SUBSCRIBE_TO_PLAN: {
      return {
        ...state,
        subscribed: action.payload,
      }
    }
    case UNSUBSCRIBE: {
      return {
        ...state,
        subscribed: false,
      }
    }
    case INIT_POLL_LIST: {
      return {
        ...state,
        pollList: INIT_STATE.pollList,
      }
    }
    case GET_POLL_LIST_PENDING: {
      return {
        ...state,
        pollList: {
          data: state.pollList.data,
          loading: true,
          total: state.pollList.total,
          current_page: state.pollList.current_page,
          last_page: state.pollList.last_page,
        },
      }
    }
    case GET_POLL_LIST_SUCCESS: {
      return {
        ...state,
        pollList: {
          data: [...state.pollList.data, ...action.payload.data],
          loading: false,
          total: action.payload.total,
          current_page: action.payload.current_page,
          last_page: action.payload.last_page,
        },
      }
    }
    case GET_POLL_LIST_ERROR: {
      return {
        ...state,
        pollList: { data: [], loading: false, total: 10 },
      }
    }

    default:
      return state
  }
}
