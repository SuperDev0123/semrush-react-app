const initialState = ''
const ForgetPasswordMessageGet = (state = initialState, action) => {
  switch (action.type) {
    case 'FORGETPASSWORDMESSAGE': {
      return action.payload
    }
    default:
      return state
  }
}
export default ForgetPasswordMessageGet
