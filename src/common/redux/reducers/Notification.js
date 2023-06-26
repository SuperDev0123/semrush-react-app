const initialState = {
  notificationData: {},
}
const notificationGetData = (state = initialState, action) => {
  switch (action.type) {
    case 'NOTIFICATIONDATA': {
      return { notificationData: action.payload }
    }
    default:
      return state
  }
}
export default notificationGetData
