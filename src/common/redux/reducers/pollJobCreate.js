const initialState = {
  pollJobData: {},
}
const PollJobCreateGetData = (state = initialState, action) => {
  switch (action.type) {
    case 'POLLJOBCREATEDATA': {
      return { pollJobData: action.payload }
    }
    default:
      return state
  }
}
export default PollJobCreateGetData
