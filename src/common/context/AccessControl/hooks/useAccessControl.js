import { useState } from 'react'
import { useSelector } from 'react-redux'
import { isEmpty } from 'lodash'

import accessControlState from '../data/stateCreator'

const useAccessControl = () => {
  const { authUser } = useSelector(({ auth }) => auth)

  const [accessControl, setAccessControl] = useState(() =>
    accessControlState.createEmpty()
  )
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitLoading, setIsSubmitLoading] = useState(false)
  const { isUserSubscribed, hasNumPollsRemaining } =
    accessControl.subscribePlanInformation

  const pollCreationIsAllowed = !!isUserSubscribed && !!hasNumPollsRemaining

  const isAuthenticated = !isEmpty(authUser)

  return {
    accessControl,
    setAccessControl,
    helpers: {
      pollCreationIsAllowed,
    },
    isAuthenticated,
    isLoading,
    setIsLoading,
    isSubmitLoading,
    setIsSubmitLoading,
  }
}

export default useAccessControl
