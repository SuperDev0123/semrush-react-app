export const subscriptionErrorMessagesFactory = ({
  isUserSubscribed,
  hasNumPollsRemaining,
}) => {
  const defaultMessage = {
    title: '',
    message: '',
  }

  if (!isUserSubscribed) {
    return {
      title: 'Subscribe to the plan',
      message:
        'To generate a poll, you must subscribe to a plan. You have not yet subscribed to a plan',
    }
  }

  if (!hasNumPollsRemaining) {
    return {
      title: 'Upgrade Subscription',
      message:
        'Monthly poll limit reached, please upgrade your plan to launch a new poll.',
    }
  }

  return defaultMessage
}
