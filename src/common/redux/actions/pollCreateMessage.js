export const pollCreateMessage = (obj) => {
  return {
    type: 'POLLCREATEMESSAGE',
    payload: obj,
  }
}

export const pollCreateMessageFail = (obj) => {
  return {
    type: 'POLLCREATEMESSAGE_FAIL',
    payload: obj,
  }
}
