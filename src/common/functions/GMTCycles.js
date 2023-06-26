import { setGTMEvents } from './tools'

export const GMTCycles = {
  afterLogin: () =>
    setGTMEvents({
      category: 'account',
      action: 'login',
      label: 'login with email and password',
      value: 1,
    }),
  afterLogout: () =>
    setGTMEvents({
      category: 'account',
      action: 'logout',
      label: 'logout from system',
      value: 1,
    }),
  afterRegister: () =>
    setGTMEvents({
      category: 'account',
      action: 'signup',
      label: 'Signup with email and password',
      value: 1,
    }),
  afterChangePassword: () =>
    setGTMEvents({
      category: 'account',
      action: 'forgotPassword',
      label: 'User perform forgot password event',
      value: 1,
    }),
  afterCreatePoll: () =>
    setGTMEvents({
      category: 'poll',
      action: 'publishPoll',
      label: 'User clicked to the publish poll button',
      value: 1,
    }),
}
