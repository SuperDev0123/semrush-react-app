import apiRoutes from '@src/common/apiRoutes'
import { instanceAxios } from '@src/common/config/axios'
import { setAuthorizationToken } from '@src/common/functions/tools'

export const checkClientSubscription = () =>
  instanceAxios.get(apiRoutes.CHECK_CLIENT_SUBSCRIPTION()).then((res) => res)

export const sendAccountConfirmationLink = (token = '') => {
  setAuthorizationToken(token)
  return instanceAxios
    .post(apiRoutes.SEND_ACCOUNT_CONFIRMATION_LINK())
    .then((res) => res)
}

export const login = (requestBody) =>
  instanceAxios
    .post(apiRoutes.AUTHENTICATION_LOGIN(), requestBody)
    .then((res) => {
      window.__insp = window.__insp || []
      window.__insp.push([
        'tagSession',
        { id: res.data.user.id, email: res.data.user.email },
      ])
      return res.data
    })

export const fetchProfile = (token = null) => {
  setAuthorizationToken(token)
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_FETCH_PROFILE())
    .then((res) => res.data)
}
export const logout = () =>
  instanceAxios.post(apiRoutes.AUTHENTICATION_LOGOUT()).then((res) => res.data)

export const register = (requestBody) =>
  instanceAxios
    .post(apiRoutes.AUTHENTICATION_REGISTER(), requestBody)
    .then((res) => res.data)

export const markAllReadNotification = () => {
  setAuthorizationToken()
  return instanceAxios
    .post(apiRoutes.AUTHENTICATION_MARK_ALL_READ_NOTIFICATION())
    .then((res) => res.data)
}

export const changeSettings = () => {
  setAuthorizationToken()
  return instanceAxios
    .post(apiRoutes.AUTHENTICATION_CHANGE_SETTINGS())
    .then((res) => res.data)
}

export const fetchPolls = (params) => {
  setAuthorizationToken()
  return instanceAxios
    .get(apiRoutes.FETCH_POLLS(), {
      params,
    })
    .then((res) => res.data)
}

export const changePassword = (requestBody) =>
  instanceAxios
    .post(apiRoutes.AUTHENTICATION_CHANGE_PASSWORD(), requestBody)
    .then((res) => res.data)

export const createPoll = (requestBody) => {
  setAuthorizationToken()
  return instanceAxios
    .post(apiRoutes.CREATE_POLL(), requestBody)
    .then((res) => res.data)
}

export const changeAccount = (requestBody) =>
  instanceAxios
    .post(apiRoutes.AUTHENTICATION_CHANGE_ACCOUNT(), requestBody)
    .then((res) => res.data)

export const fetchTemplates = () =>
  instanceAxios.get(apiRoutes.FETCH_TEMPLATES()).then((res) => res.data)

export const getPlanList = () => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_GET_PLAN_LIST())
    .then((res) => res.data)
}

export const getUserBilling = () => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_GET_USER_BILLING())
    .then((res) => res.data)
}

export const checkCoupon = (requestBody) => {
  return instanceAxios
    .post(apiRoutes.AUTHENTICATION_CHECK_COUPON(), requestBody)
    .then((res) => res.data)
}

export const cancelSubscription = () => {
  return instanceAxios
    .put(apiRoutes.AUTHENTICATION_CANCEL_SUBSCRIPTION())
    .then((res) => res.data)
}

export const resumeSubscription = () => {
  return instanceAxios
    .put(apiRoutes.AUTHENTICATION_RESUME_SUBSCRIPTION())
    .then((res) => res.data)
}

export const getInvoices = () => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_GET_INVOICES())
    .then((res) => res.data)
}

export const downloadInvoice = (requestBody) => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_DOWNLOAD_INVOICE(requestBody.invoiceId), {
      responseType: 'blob',
    })
    .then((res) => res)
}

export const getCountryList = () => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_GET_COUNTRY_LIST())
    .then((res) => res.data)
}

export const getSetupSecret = () => {
  return instanceAxios
    .get(apiRoutes.AUTHENTICATION_GET_SETUP_SECRET())
    .then((res) => res.data)
}

export const processPayment = (requestBody) => {
  return instanceAxios
    .post(apiRoutes.AUTHENTICATION_PROCESS_PAYMENT(), requestBody)
    .then((res) => res.data)
}

export const updatePayment = (requestBody) => {
  return instanceAxios
    .put(apiRoutes.AUTHENTICATION_UPDATE_PAYMENT(), requestBody)
    .then((res) => res.data)
}

export const changePlan = (requestBody) => {
  return instanceAxios
    .put(apiRoutes.AUTHENTICATION_CHANGE_PLAN(), requestBody)
    .then((res) => res.data)
}

export const pollShare = (requestBody) => {
  return instanceAxios
    .patch(apiRoutes.AUTHENTICATION_POLL_SHARE(requestBody.id), {
      is_sharing: requestBody.is_sharing,
    })
    .then((res) => res.data)
}

export const launchPoll = (requestBody) => {
  return instanceAxios
    .post(apiRoutes.LAUNCH_POLL(requestBody.poll_id), requestBody.data)
    .then((res) => res.data)
}

export const confirmPollPayment = (requestBody) => {
  return instanceAxios
    .post(apiRoutes.CONFIRM_POLL_PAYMENT(requestBody.poll_id), requestBody.data)
    .then((res) => res.data)
}

export const updatePoll = (data) => {
  return instanceAxios
    .put(apiRoutes.UPDATE_POLL(data.poll_id), data.data)
    .then((res) => res.data)
}

export const uploadPollResource = (data) => {
  return instanceAxios
    .post(apiRoutes.UPLOAD_POLL_RESOURCE(data), data)
    .then((res) => res.data)
}

export const userProfileImage = (file) => {
  const formData = new FormData()
  const currentFile = file[0]
  formData.append('fieldName', currentFile.name)
  formData.append('profilePicture', currentFile)
  return instanceAxios
    .post(apiRoutes.UPDATE_USER_PROFILE_IMAGE(), formData)
    .then((res) => res.data)
}

export const updateUserDetails = (data) => {
  return instanceAxios
    .put(apiRoutes.UPDATE_USER_PROFILE_DETAILS(), data)
    .then((res) => res.data)
}

export const getPollResultResponses = (id, query) => {
  return instanceAxios
    .get(apiRoutes.POLL_RESULT_RESPONSE(id), query)
    .then((res) => res.data)
}

export const rejectResponse = (id, rejectReason) => {
  return instanceAxios
    .put(apiRoutes.REJECT_RESPONSE(id), {
      rejectReason,
    })
    .then((res) => res.data)
}

export const suggestionCompletion = (prompt) => {
  return instanceAxios
    .get(apiRoutes.SUGGESTION_COMPLETION(prompt))
    .then((res) => res.data)
}

export const getPollDetails = (pollId) => {
  return instanceAxios
    .get(apiRoutes.UPDATE_POLL(pollId))
    .then((res) => res.data)
}

export const updatePollTestDetails = ({ pollId, testDetails }) => {
  return instanceAxios
    .patch(apiRoutes.UPDATE_POLL_TEST_DETAILS(pollId), testDetails)
    .then((res) => res.data)
}
