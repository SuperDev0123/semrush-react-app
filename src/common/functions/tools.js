import Cookies from 'js-cookie'
import { Base64 } from 'js-base64'
import { filter, sortBy } from 'lodash'
import TagManager from 'react-gtm-module'
import { notificationData } from '@src/common/redux/actions/Notification'

import { instanceAxios } from '@src/common/config/axios'
import { browserRoutes } from '@src/common/browserRoutes'

import { Storage } from '@src/routes/PollCreation/common/services'
import { store } from '../../App'
import { ATTEMPT_URL, COUPON_CODE } from '../constants'

export function minutesToHhMm(minutes) {
  return Math.trunc(minutes / 60) + (minutes % 60) / 100
}

export const getYoutubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)

  return match && match[2].length === 11 ? match[2] : null
}

export const setGTMEvents = ({ category, action, label, value }) => {
  if (!window.dataLayer) return

  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category,
      action,
      label,
      value,
    },
  })
}

export const authenticationRememberMe = (isRemember, formValues) => {
  if (isRemember) {
    const rememberObj = {
      isChecked: isRemember,
      email: formValues.email,
      password: Base64.encode(formValues.password),
    }
    localStorage.setItem('rememberObj', JSON.stringify(rememberObj))
  } else {
    localStorage.removeItem('rememberObj')
  }
}

export const getRememberedAuthData = (setRemember, formikObject) => {
  const rememberObj = localStorage.getItem('rememberObj')
  if (rememberObj) {
    const { isChecked, email, password } = JSON.parse(rememberObj)
    setRemember(isChecked)
    formikObject.setFieldValue('email', email)
    formikObject.setFieldValue('password', Base64.decode(password))
  }
}

export const setAuthorizationToken = (token) => {
  const accessToken = token || localStorage.getItem('token')
  instanceAxios.defaults.headers.common.Authorization = 'Bearer ' + accessToken
}

export const setUserDataAfterAuthorize = (data) => {
  setAuthorizationToken(data.access_token || data.token)
  localStorage.setItem('token', data.access_token || data.token)
  localStorage.setItem('userDetail', JSON.stringify(data.user))
}

export const transformFetchAllResponse = (responseData) => {
  return (
    responseData.data.map((ele) => ({
      id: ele.id,
      question: ele.question,
      srcs: [ele.option_a, ele.option_b],
      type: ele.type,
      pollType: ele.type === 'short-text' ? 'text' : ele.type,
      status: ele.status_label,
      footerText: ele.title,
      recent: true,
      responses: ele.response_count,
      responsesRequired: ele.responses_required,
    })) ?? []
  )
}

export const getSortedItems = (dataFlow, sortValue) => {
  if (sortValue === 'recent') {
    return sortBy(
      filter(dataFlow, (item) => item.recent),
      (pollItem) => pollItem.id
    ).reverse()
  }
  if (sortValue === 'name') {
    return sortBy(dataFlow, (pollItem) => pollItem.footerText)
  }
  if (sortValue === 'response:ascending') {
    return sortBy(dataFlow, (pollItem) => pollItem.responses).reverse()
  }
  if (sortValue === 'response:descending') {
    return sortBy(dataFlow, (pollItem) => pollItem.responses)
  }
}

export const preparePollCreationData = (data) => {
  const finalData = new FormData()

  finalData.append('pollCreate', JSON.stringify(data.pollCreateFinal))
  finalData.append('pollJob', JSON.stringify(data.pollCreateJobFinal.criterias))
  finalData.append('response', data.pollCreateJobFinal.pollResponses)
  finalData.append('estimatedTime', data.estimatedTime)
  finalData.append('total_cost', data.total_cost)
  finalData.append('costPerResponse', data.costPerResponse)
  finalData.append('fileA', data.pollCreateFinal.fileA)
  finalData.append('fileB', data.pollCreateFinal.fileB)

  return finalData
}

export const savePollItemAfterCreation = (data) => {
  const pollNewItem = JSON.parse(localStorage.getItem('pollItems')) ?? []
  const dataChange = {
    id: data.poll_id,
    question: data.pollSubTitle,
    srcs: [...data.fileA, ...data.fileB],
    type: data.pollTemplate,
    pollType: data.pollTemplate === 'short-text' ? 'text' : data.pollTemplate,
    status: 'started',
    footerText: data.pollTitle,
    recent: true,
    responses: 0,
  }
  pollNewItem.push(dataChange)
  localStorage.setItem('pollItems', JSON.stringify(pollNewItem))
}

export const setLayoutType = () => {
  document.body.classList.remove('layout-type-boxed')
  document.body.classList.remove('layout-type-framed')
  document.body.classList.add('layout-type-fullwidth')
}

export const isPublicURL = (location) => {
  const publicURLs = [
    browserRoutes.SIGN_IN(),
    browserRoutes.GUEST_TEMPLATES(),
    browserRoutes.SIGN_UP(),
    browserRoutes.FORGOT_PASSWORD(),
    browserRoutes.LINK404(),
    browserRoutes.GUEST_SUGGESTIONS_SLUG(),
    browserRoutes.GUEST_SUGGESTIONS(),
    browserRoutes.POLL_ENDED(),
    browserRoutes.THANK_YOU_TEST(),
  ]
  const copiedLocation = location ?? window.location

  if (copiedLocation.pathname.includes(browserRoutes.POLL_RESULT())) {
    const explodedItems = copiedLocation.pathname.split('/')
    return (
      !Storage.get('token') &&
      explodedItems.length === 4 &&
      explodedItems[3].length
    )
  } else {
    const basePathName =
      copiedLocation.pathname.split('/').length >= 3
        ? ('/' + copiedLocation.pathname.split('/')[1]).toLowerCase()
        : copiedLocation.pathname
    // console.log('Base path name', copiedLocation.pathname.split('/')[1])
    return (
      publicURLs.includes(basePathName) ||
      basePathName.includes(browserRoutes.ACCOUNT_CONFIRMATION())
    )
  }
}

export const isValidURL = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  return !!pattern.test(str)
}

export const initializeTagManager = () => {
  TagManager.initialize({
    gtmId: 'GTM-K2V78GV',
  })
}

// export const initializePusher = () => {
//   Pusher.logToConsole = true
//   const pusher = new Pusher('361bbce76423ef6eb1d6', {
//     cluster: 'us2',
//     forceTLS: true,
//   })
//   const channel = pusher.subscribe('my-channel')
//   channel.bind('send_notification', function (data) {
//     const user = localStorage.getItem('userDetail')
//     const userId = JSON.parse(user)
//     if (userId.id === data.data.id) {
//       store.dispatch(notificationData(data.data.unread_notifications))
//     }
//   })
// }

export const previewPoll = (data) => {
  const win = window.open(browserRoutes.POLL_PREVIEW(data), '_blank')

  win.focus()
}

export const setAttemptURL = async () => {
  return await Storage.set(
    ATTEMPT_URL,
    `${window.location.pathname}${window.location.search}`
  )
}

export const removeAttemptURL = () => {
  Storage.set(ATTEMPT_URL, null)
}

export const getAttemptURL = (location = window.location) => {
  const attemptURLFromStorage = JSON.parse(Storage.get(ATTEMPT_URL))
  const searchParams = new URLSearchParams(location.search)
  const attemptURL = searchParams.get(ATTEMPT_URL)
  return attemptURLFromStorage || attemptURL
}

export const setCouponCode = async (location = window.location) => {
  const searchParams = new URLSearchParams(location.search)
  const coupon = searchParams.get(COUPON_CODE)
  if (coupon)
    return await Storage.set(
      COUPON_CODE,
      coupon
    )
}

export const removeCouponCode = () => {
  Storage.set(COUPON_CODE, null)
  Cookies.remove(COUPON_CODE)
}

export const getCouponCode = (location = window.location) => {
  const couponFromStorage = JSON.parse(Storage.get(COUPON_CODE))
  const searchParams = new URLSearchParams(location.search)
  const couponCode = searchParams.get(COUPON_CODE)
  const couponFromCookie = Cookies.get(COUPON_CODE)
  return couponFromStorage || couponCode || couponFromCookie
}
