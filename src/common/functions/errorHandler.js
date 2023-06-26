import React from 'react'
import Swal from 'sweetalert2'

import { NotificationLink } from '@src/common/components'

export const XHRErrorCodes = {
  SUBSCRIPTION_REQUIRED: 'subscription_required',
  UPGRADE_PLAN: 'upgrade_plan',
  UNABLE_INVOICE: 'unable_invoice',
  UNABLE_MTURK_JOB: 'unable_mturk_job',
  ACCOUNT_NOT_CONFIRMED: 'failed_account_confirmation',
  IMPERSONATE_USER_NOT_FOUND: 'impersonate_user_not_found',
  PAYMENT_FAILED: 'payment_failed',
  CARD_DECLINED: 'card_declined',
  UNKNOWN: 'unknown',
}

export const XHRErrorFactory = ({
  globalError,
  addNotification,
  changeSettingsMutation,
}) => {
  if (!globalError) return

  const { error_code, message, title, httpStatus } = globalError
  if (httpStatus === 401) return

  const changeSettings = () => changeSettingsMutation.mutate(null)

  switch (error_code) {
    case XHRErrorCodes.SUBSCRIPTION_REQUIRED:
      addNotification({
        title: message,
        variant: 'warning',
        LinkComponent: () => (
          <NotificationLink onClick={changeSettings} title={title} />
        ),
      })
      break
    case XHRErrorCodes.UPGRADE_PLAN:
      addNotification({
        title: message,
        variant: 'warning',
        LinkComponent: () => (
          <NotificationLink onClick={changeSettings} title={title} />
        ),
      })
      break
    case XHRErrorCodes.UNABLE_INVOICE:
      addNotification({
        title: message,
        variant: 'warning',
        LinkComponent: () => (
          <NotificationLink onClick={changeSettings} title={title} />
        ),
      })
      break
    case XHRErrorCodes.UNABLE_MTURK_JOB:
      addNotification({
        title: message,
        variant: 'warning',
      })
      break
    case XHRErrorCodes.ACCOUNT_NOT_CONFIRMED:
      Swal.fire({
        title: 'Error',
        text: message ?? '',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then(() => {
        window.location.href = '/account-confirmation'
      })
      break
    case XHRErrorCodes.PAYMENT_FAILED:
      Swal.fire({
        title: 'Error',
        text: message ?? '',
        icon: 'error',
        confirmButtonText: 'OK',
      })
      break
    case XHRErrorCodes.CARD_DECLINED:
      break
    case XHRErrorCodes.IMPERSONATE_USER_NOT_FOUND:
      break
    case XHRErrorCodes.UNKNOWN:
      addNotification({
        title: 'Something wrong, Please try again later.',
        variant: 'warning',
      })
      break
    default:
      if (typeof error_code !== 'undefined') return

      addNotification({
        title: 'Something wrong, Please try again later.',
        variant: 'warning',
      })
      break
  }
}
