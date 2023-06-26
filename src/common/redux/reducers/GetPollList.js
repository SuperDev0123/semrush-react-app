const initialState = {
  getPolllList: {},
}
const GetPollListData = (state = initialState, action) => {
  switch (action.type) {
    case 'GETPOLLLIST': {
      return { getPolllList: action.payload }
    }
    default:
      return state
  }
}
export default GetPollListData
