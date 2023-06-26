const initialState = false
const ShowLoaderGet = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOWLOADER': {
      return action.payload
    }
    default:
      return state
  }
}
export default ShowLoaderGet
