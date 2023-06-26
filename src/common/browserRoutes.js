import Guest from '../routes/Guest'
import Suggestions from '../routes/Suggestions'
import SuggestionsList from '../routes/SuggestionsList'
import Login from '../routes/Auth/Login'
import Error404 from '../routes/Error404'
import Signup from '../routes/Auth/Register'
import ForgotPassword from '../routes/Auth/ForgotPassword'
import AccountConfirmation from '../routes/Auth/AccountConfirmation'
import AccountConfirmationFail from '../routes/Auth/AccountConfirmationFail'
import AccountConfirmationSuccess from '../routes/Auth/AccountConfirmationSuccess'
import Dashboards from '../routes/Dashboards'
import ChangeAccount from '../routes/ChangeAccount'
import Billing from '../routes/Billing'
import LaunchPoll from '../routes/LaunchPoll'
import StartFromScratch from '../routes/StartScratch'
import ChooseTemplate from '../routes/ChooseTemplate'
import PollCreation from '../routes/PollCreation'
import AllPolls from '../routes/AllPolls'
import Results from '../routes/Results'
import Profile from '../routes/Profile'
import PollEnded from '../routes/PollEnded'
import ThankYou from '../routes/ThankYou'

export const withAttemptURL = ({ baseURI, attemptURL }) => {
  if (!attemptURL) return baseURI

  return `${baseURI}?attemptUrl=${attemptURL}`
}

const serialize = (obj) => {
  const str = []
  for (const p in obj)
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
    }
  return str.join('&')
}

export const browserRoutes = {
  HOME: () => '/',
  DASHBOARD: () => '/dashboard/home',
  SIGN_IN: (attemptURL) => {
    const baseURI = '/signin'
    return withAttemptURL({ baseURI, attemptURL })
  },
  SIGN_UP: (attemptURL) => {
    const baseURI = '/signup'
    return withAttemptURL({ baseURI, attemptURL })
  },
  GUEST_TEMPLATES: () => '/templates',
  GUEST_SUGGESTIONS_SLUG: (slugText) =>
    `/google-headline-optimizer/${slugText}`,
  GUEST_SUGGESTIONS: () => '/google-headline-optimizer',
  FORGOT_PASSWORD: () => '/forgot-password',
  ACCOUNT_CONFIRMATION: (attemptURL) => {
    const baseURI = '/account-confirmation'
    return withAttemptURL({ baseURI, attemptURL })
  },
  CHANGE_ACCOUNT: () => '/change-account',
  BILLING: () => '/billing',
  POLL_CREATION: (templateID, pollData = null) => {
    if (pollData) {
      const {
        pollTitle,
        pollSubTitle,
        textA,
        textB,
        fileA,
        fileB,
        responsesRequired,
      } = pollData

      const queryString = serialize({
        pollTitle,
        pollSubTitle,
        textA,
        textB,
        fileA,
        fileB,
        responsesRequired,
      })
      return `/poll-creation/${templateID}?${queryString}`
    } else {
      return `/poll-creation/${templateID}`
    }
  },
  POLL_PREVIEW: (data) => `/poll-preview/${data.poll_id}/${data.preview_slug}`,
  POLL_RESULT: () => 'results/',
  PROFILE: () => '/profile',
  LINK404: () => '/404',
  ACCOUNT_DELETE: () => '/account-deleted',
  POLL_ENDED: () => '/poll-ended',
  THANK_YOU_TEST: () => '/thank-you',
}

export const publicRoutes = [
  {
    id: 1,
    path: '/templates',
    exact: false,
    component: Guest,
  },
  {
    id: 2,
    path: '/signin',
    exact: false,
    component: Login,
  },
  {
    id: 3,
    path: '/signup',
    exact: false,
    component: Signup,
  },
  {
    id: 4,
    path: '/forgot-password',
    exact: false,
    component: ForgotPassword,
  },
  {
    id: 5,
    path: '/account-confirmation/fail/:token',
    exact: false,
    component: AccountConfirmationFail,
  },
  {
    id: 6,
    path: '/account-confirmation/success',
    exact: false,
    component: AccountConfirmationSuccess,
  },
  {
    id: 7,
    path: '/results/:id/:slug?',
    component: Results,
    exact: false,
  },
  {
    id: 8,
    path: '/account-confirmation',
    exact: false,
    component: AccountConfirmation,
  },
  {
    id: 10,
    path: '/google-headline-optimizer/:slugText',
    exact: false,
    component: SuggestionsList,
  },
  {
    id: 11,
    path: '/google-headline-optimizer',
    exact: false,
    component: Suggestions,
  },
  {
    id: 12,
    path: '/poll-ended',
    exact: false,
    component: PollEnded,
  },
  {
    id: 13,
    path: '/thank-you',
    exact: false,
    component: ThankYou,
  },
  {
    id: 9,
    path: '/404',
    exact: false,
    component: Error404,
  },
]

export const privateRoutes = [
  {
    id: 1,
    path: '/dashboard',
    component: Dashboards,
    exact: false,
  },
  {
    id: 2,
    path: '/change-account',
    component: ChangeAccount,
    exact: false,
  },
  {
    id: 3,
    path: '/billing',
    component: Billing,
    exact: false,
  },
  {
    id: 4,
    path: '/launch-poll',
    component: LaunchPoll,
    exact: false,
  },
  {
    id: 5,
    path: '/start-from-scratch',
    component: StartFromScratch,
    exact: false,
  },
  {
    id: 6,
    path: '/choose-template',
    component: ChooseTemplate,
    exact: true,
  },
  {
    id: 7,
    path: '/all-polls',
    component: AllPolls,
    exact: true,
  },
  {
    id: 8,
    path: '/poll-creation/:templateID',
    component: PollCreation,
    exact: false,
  },
  {
    id: 9,
    path: '/profile',
    component: Profile,
    exact: false,
  },
]
