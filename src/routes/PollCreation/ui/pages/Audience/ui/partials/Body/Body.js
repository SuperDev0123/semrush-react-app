import React, { useContext, useEffect, useState } from 'react'
import { Box, Hidden } from '@material-ui/core'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import { When } from '@src/common/components'
import Subscription from '@src/routes/Subscription'
import { AccessControlContext } from '@src/common/context/AccessControl'
import { Container } from '@src/routes/PollCreation/ui/components'
import { priceBoxTotalPrice } from '@src/routes/PollCreation/common/utils'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { previewPoll } from '@src/common/functions/tools'
import { Storage } from '@src/routes/PollCreation/common/services'
import { checkClientSubscription, getUserBilling } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { fetchError } from '@src/common/redux/actions'

import {
  EstDeliveryBlock,
  TargetingBlock,
  CriteriaBlock,
  PricingBlock,
  ActionsBlock,
  PTPAudienceCreateLinkBlock,
  ChooseAudienceTypeBlock,
  UserAudienceBlock,
} from '../../blocks'

import useBodyStyles from './Body.styles'

const useQueryParams = () => {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const Body = () => {
  const classes = useBodyStyles()
  const history = useHistory()
  const [pollId, setPollId] = React.useState(0)
  const dispatch = useDispatch()
  const [showPaymentElements, setShowPaymentElements] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [isUserSubscribed, setIsUserSubscribed] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)
  const [isPollRemain, setIsPollRemain] = useState(true)
  const [isChangingPlan, setIsChangingPlan] = useState(false)
  const [isCreatingLink, setIsCreatingLink] = useState(false)
  const [isUsingUserAudience, setIsUsingUserAudience] = useState(false)

  const query = useQueryParams()

  const {
    setAccessControl,
    accessControl: {
      costInformation,
      responseInformation,
      // subscribePlanInformation: { isUserSubscribed },
    },
  } = useContext(AccessControlContext)

  const defaultResponseRequiredValue = 100
  const queryParams = {
    responsesRequired:
      (query.get('responsesRequired') === 'undefined'
        ? defaultResponseRequiredValue
        : query.get('responsesRequired')) || defaultResponseRequiredValue,
  }

  const {
    isCriteriaBlockOpen,
    setActiveStep,
    setIsPreviewModalOpen,
    setCriteriaBlockIsOpen,
    ...state
  } = useContext(PollCreationContext)
  const audienceFlow = state[pollCreationSteps.AUDIENCE]
  const { pollResponses, selectedCriteriaList } = audienceFlow

  const calculatedTotalPrice = priceBoxTotalPrice({
    audience: audienceFlow,
    selectedCriteriaList,
    costInformation,
  })

  const { data, refetch } = useQuery({
    queryKey: queryKeys.CHECK_USER_SUBSCRIPTION,
    queryFn: checkClientSubscription,
    onSuccess: (res) => {
      const {
        isUserSubscribed,
        hasNumPollsRemaining,
        costPerAdditionalCriteria,
        costPerResponse,
        recommendedNumRespondents,
        maxRespondentsPerPoll,
        maxPollsPerMonth,
        numPollsRemaining,
      } = res.data
      setAccessControl((prevState) => {
        return {
          ...prevState,
          subscribePlanInformation: {
            ...prevState.subscribePlanInformation,
            isUserSubscribed,
            hasNumPollsRemaining,
          },
          costInformation: {
            ...prevState.costInformation,
            costPerAdditionalCriteria,
            costPerResponse,
          },
          responseInformation: {
            recommendedNumRespondents,
            maxRespondentsPerPoll,
            maxPollsPerMonth,
            numPollsRemaining,
          },
        }
      })
    },
  })

  const getUserBillingMutation = useQuery({
    queryKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    queryFn: getUserBilling,
    enabled: true,
    retry: 2,
    cacheTime: 0,
    onSuccess: (data) => {
      setSubscription(data.subscription)
      setIsUserSubscribed(data.is_user_subscribed)
      setIsCancelling(data.is_cancelling)
    },
    onError: (error) => {
      dispatch(fetchError(error.response.data.error))
    },
  })

  const handleNext = () => {
    if (!isUserSubscribed || isCancelling) {
      setShowPaymentElements(true)
    }
    if (isUserSubscribed && isPollRemain) {
      setActiveStep(pollCreationSteps.PAYMENT, true)
    }
    if (isUserSubscribed && !isPollRemain) {
      setIsChangingPlan(true)
    }
  }

  const onPaymentComplete = () => {
    setShowPaymentElements(false)
    refetch()
    getUserBillingMutation.refetch()
    setAccessControl((prevState) => ({
      ...prevState,
      subscribePlanInformation: {
        ...prevState.subscribePlanInformation,
        isUserSubscribed: true,
      },
    }))
    setActiveStep(pollCreationSteps.PAYMENT, true)
  }

  const onPaymentFail = () => {
    setShowPaymentElements(false)
  }

  const closeCriteriaBlock = () => setCriteriaBlockIsOpen(false)
  const openCriteriaBlock = () => setCriteriaBlockIsOpen(true)

  const onUseUserAudience = () => {
    setIsCreatingLink(false)
    setIsUsingUserAudience(true)
  }

  const onUserAudienceBlockClosed = (redirect) => {
    if (redirect) {
      history.push('/launch-poll')
    } else {
      setIsUsingUserAudience(false)
    }
  }

  useEffect(() => {
    const pollDataStorage = Storage.get(
      `${state.templateID}-${pollCreationSteps.DESIGN}`,
      true
    )

    if (pollDataStorage) {
      setPollId({
        ...pollDataStorage,
      })
    }
    getUserBillingMutation.refetch()
  }, [])

  useEffect(() => {
    setIsPollRemain(data.data.numPollsRemaining > 0)
  }, [data, isUserSubscribed])

  return (
    <Container wrapperClass={classes.container}>
      <Box className={classes.bodyWrapper}>
        <Box className={classes.bodyWrapperSection}>
          <TargetingBlock
            openCriteriaBlock={openCriteriaBlock}
            responseInformation={responseInformation}
            responsesRequired={queryParams.responsesRequired}
          />
          <When condition={isCriteriaBlockOpen}>
            <CriteriaBlock onClose={closeCriteriaBlock} />
          </When>
          <Hidden smDown>
            <ActionsBlock
              loading={getUserBillingMutation.isLoading}
              onPrev={() => {
                previewPoll(pollId)
              }}
              onNext={handleNext}
            />
          </Hidden>
        </Box>
        <Box className={classes.bodyWrapperArticle}>
          <EstDeliveryBlock
            pollResponses={pollResponses}
            selectedCriteriaList={selectedCriteriaList}
          />
          <PricingBlock
            pollResponses={pollResponses}
            selectedCriteriaList={selectedCriteriaList}
            costInformation={costInformation}
            calculatedTotalPrice={calculatedTotalPrice}
          />
          <PTPAudienceCreateLinkBlock
            onCreateLink={() => setIsCreatingLink(true)}
          />
        </Box>
      </Box>
      <Hidden mdUp>
        <ActionsBlock
          onPrev={() => {
            previewPoll(pollId)
            // setIsPreviewModalOpen(true)
          }}
          onNext={handleNext}
        />
      </Hidden>
      <When condition={showPaymentElements}>
        <Subscription
          job="subscribe"
          title="Subscribe the plan"
          paymentComplete={onPaymentComplete}
          paymentFail={onPaymentFail}
        />
      </When>
      <When condition={isChangingPlan}>
        <Subscription
          title="Upgrade the plan"
          job="change"
          currentPlan={subscription.plan}
          paymentComplete={onPaymentComplete}
          paymentFail={onPaymentFail}
        />
      </When>
      <When condition={isCreatingLink}>
        <ChooseAudienceTypeBlock
          onClose={() => setIsCreatingLink(false)}
          onUseUserAudience={onUseUserAudience}
        />
      </When>
      <When condition={isUsingUserAudience}>
        <UserAudienceBlock onClose={onUserAudienceBlockClosed} />
      </When>
    </Container>
  )
}

export default Body
