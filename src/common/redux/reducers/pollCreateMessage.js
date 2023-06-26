const initialState = {
  pollMessage: '',
  pollMessageFail: '',
}
const PollCreateGetMessage = (state = initialState, action) => {
  switch (action.type) {
    case 'POLLCREATEMESSAGE': {
      return { ...state, pollMessage: action.payload }
    }
    case 'POLLCREATEMESSAGE_FAIL':
      return { ...state, pollMessageFail: action.payload }
    default:
      return state
  }
}
export default PollCreateGetMessage
