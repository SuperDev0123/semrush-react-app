import React, { lazy, useContext, useEffect, Suspense } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Prompt } from 'react-router-dom'

import { createPoll } from '@src/common/redux/actions/Poll'
import PollContext from '@src/common/context/PollContext'
import InputContextProvider from '@src/common/context/InputContext'
import PageLoader from '@src/@jumbo/components/PageComponents/PageLoader'
import {
  pollSteps,
  confirmationMessage,
  pollTypes,
} from '@src/common/constants'

const CreatePollNew = lazy(() => import('../CreatePollNew'))
const SelectAudience = lazy(() => import('../SelectAudience'))
// const Subscription = lazy(() => import('../Subscription'))
const Checkout = lazy(() => import('../Checkout'))

const Poll = () => {
  const dispatch = useDispatch()
  const { pollStep } = useContext(PollContext)
  const pollData = useSelector((state) => state.poll.pollData)

  const handleReload = () => {
    dispatch(createPoll({ ...pollData, fileA: '', fileB: '' }))
  }

  useEffect(() => {
    if (pollData.pollTemplate !== pollTypes.VIDEO) {
      handleReload()
    }
  }, [])

  const formIsDirty = () =>
    (!!pollData && !!pollData.fileA) || (!!pollData && !!pollData.fileB)

  useEffect(() => {
    window.onpopstate = function () {
      if (formIsDirty()) {
        const question = window.confirm(confirmationMessage)
        if (question) {
          window.history.pushState(null, document.title, window.location.href)
        }
      }
    }

    window.onbeforeunload = function (event) {
      event = event || window.event
      event.preventDefault = true
      event.cancelBubble = true
      event.returnValue = confirmationMessage
    }

    return () => {
      window.onbeforeunload = null
    }
  }, [])

  const pollStepsFactory = () => {
    switch (pollStep) {
      case pollSteps.CREATE_POLL:
        return <CreatePollNew />
      case pollSteps.SELECT_AUDIENCE:
        return (
          <InputContextProvider>
            <SelectAudience />
          </InputContextProvider>
        )
      // case pollSteps.SUBSCRIBE_PLAN:
      //     return <Subscription />
      case pollSteps.CHECKOUT:
        return <Checkout />
      default:
        return <></>
    }
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Prompt when={formIsDirty()} message={confirmationMessage} />
      {pollStepsFactory()}
    </Suspense>
  )
}

export default Poll
