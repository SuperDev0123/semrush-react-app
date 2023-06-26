import { API_URL } from './constants'

const apiRoutes = {
  /* authentication && authorization */
  CHECK_CLIENT_SUBSCRIPTION: () => 'v1/polls/metadata',
  SEND_ACCOUNT_CONFIRMATION_LINK: () =>
    `${API_URL}/email/verification-notification`,
  GET_POLL_PREVIEW_XML: (type) => `/poll-type-preview/question${type}.xml`,
  AUTHENTICATION_LOGIN: () => 'auth/login-app',
  AUTHENTICATION_FETCH_PROFILE: () => 'auth/user-profile',
  AUTHENTICATION_LOGOUT: () => 'auth/logout',
  AUTHENTICATION_REGISTER: () => 'auth/register',
  AUTHENTICATION_MARK_ALL_READ_NOTIFICATION: () =>
    'auth/mark-read-notification',
  AUTHENTICATION_CHANGE_SETTINGS: () => 'auth/change-setting',
  AUTHENTICATION_CHANGE_PASSWORD: () => '/forgetPasswordEmail',
  AUTHENTICATION_CHANGE_ACCOUNT: () => 'auth/change-account',
  AUTHENTICATION_GET_PLAN_LIST: () => 'payments/plans',
  AUTHENTICATION_GET_USER_BILLING: () => 'payments/billing',
  AUTHENTICATION_CANCEL_SUBSCRIPTION: () => 'payments/subscription/cancel',
  AUTHENTICATION_RESUME_SUBSCRIPTION: () => 'payments/subscription/resume',
  AUTHENTICATION_GET_INVOICES: () => 'payments/receipts',
  AUTHENTICATION_DOWNLOAD_INVOICE: (id) => `payments/receipts/${id}/download`,
  AUTHENTICATION_GET_COUNTRY_LIST: () => 'payments/country-list',
  AUTHENTICATION_GET_SETUP_SECRET: () => 'payments/token',
  AUTHENTICATION_PROCESS_PAYMENT: () => 'payments/subscription',
  AUTHENTICATION_UPDATE_PAYMENT: () => 'payments/subscription/payment-method',
  AUTHENTICATION_CHANGE_PLAN: () => 'payments/subscription',
  AUTHENTICATION_POLL_SHARE: (id) => `v1/polls/${id}/share`,
  AUTHENTICATION_CHECK_COUPON: () => 'payments/check-coupon',
  /* poll */
  FETCH_POLLS: () => 'v1/polls',
  CREATE_POLL: () => 'v1/polls',
  UPDATE_POLL: (pollId) => `v1/polls/${pollId}`,
  UPLOAD_POLL_RESOURCE: () => 'v1/polls/media',
  LAUNCH_POLL: (pollId) => `v1/polls/${pollId}/job`,
  CONFIRM_POLL_PAYMENT: (pollId) => `v1/polls/${pollId}/confirm-payment`,
  UPDATE_POLL_TEST_DETAILS: (pollId) => `v1/polls/${pollId}/test/share`,
  /* templates */
  FETCH_TEMPLATES: () => 'v1/templates',
  FETCH_TEMPLATE_BY_ID: (templateID) => `v1/templates/${templateID}`,
  UPDATE_USER_PROFILE_IMAGE: () => 'auth/user-profile/media',
  UPDATE_USER_PROFILE_DETAILS: () => 'auth/user-profile',
  POLL_RESULT_RESPONSE: (pollId) => `v1/polls/${pollId}/results`,
  REJECT_RESPONSE: (id) => `v1/turkResponse/${id}`,
  SUGGESTION_COMPLETION: (searchHeadline) =>
    `v1/suggested/completion?prompt=${searchHeadline}`,
}

export default apiRoutes
