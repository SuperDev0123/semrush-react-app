const initialState = {
  pollData: {},
}
const PollCreateGetData = (state = initialState, action) => {
  switch (action.type) {
    case 'POLLCREATEDATA': {
      return { pollData: action.payload }
    }
    default:
      return state
  }
}
export default PollCreateGetData
