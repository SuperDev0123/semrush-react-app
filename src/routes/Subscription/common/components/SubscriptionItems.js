import React, { useEffect, useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { Box, Button } from '@material-ui/core'
import {
  processPayment,
  updatePayment,
  cancelSubscription,
  changePlan,
} from '@src/common/api'
import { When, Toaster } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import { subscribe } from '@src/common/redux/actions/Poll'
import { AccessControlContext } from '@src/common/context/AccessControl'
import Plans from './Plans'
import Plan from './Plan'
import PayElement from './PayElement'
import useStyles from '../style/index.style'

const SubscriptionItems = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [showPlans, setShowPlans] = useState(!props.hidePlans)
  const [planInfo, setPlanInfo] = useState(null)
  const [canChangePlan, setCanChangePlan] = useState(true)
  const { setIsSubmitLoading } = useContext(AccessControlContext)

  const changePlanMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHANGE_PLAN,
    mutationFn: changePlan,
    onSuccess: () => {
      Toaster.success('change plan successfully')
      dispatch(fetchSuccess())
      props.paymentComplete()
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const processPaymentMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_PROCESS_PAYMENT,
    mutationFn: processPayment,
    onSuccess: () => {
      Toaster.success('plan is subscribed successfully')
      dispatch(fetchSuccess())
      dispatch(subscribe(true))
      props.paymentComplete()
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const updatePaymentMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_UPDATE_PAYMENT,
    mutationFn: updatePayment,
    onSuccess: () => {
      Toaster.success('payment information update successfully')
      dispatch(fetchSuccess())
      props.paymentComplete()
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const cancelSubscriptionMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CANCEL_SUBSCRIPTION,
    mutationFn: cancelSubscription,
    onSuccess: () => {
      Toaster.success('cancel subscription successfully')
      dispatch(fetchSuccess())
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const subscribePlan = (planInfo) => {
    if (props.job === 'change') {
      // Changing plans?
      setIsSubmitLoading(true)
      changePlanMutation.mutate({ planInfo })
    } else {
      setPlanInfo(planInfo)
      setShowPlans(false)
    }
  }

  const paymentComplete = (paymentInformation, newAddress) => {
    const params = { paymentInformation, newAddress }

    switch (props.job) {
      case 'subscribe': // Subscribing to plan
        processPaymentMutation.mutate({ planInfo, ...params })
        break
      case 'update': // Updating payment method only
        updatePaymentMutation.mutate(params)
        break
    }
  }

  const paymentCancel = (parentProps = {}) => {
    if (parentProps.failed) {
      if (props.job === 'subscribe') {
        cancelSubscriptionMutation.mutate(null)
      }
      props.paymentFail()
    } else {
      setPlanInfo(null)
      setShowPlans(true)
    }
  }

  const paymentStart = () => {
    setIsSubmitLoading(true)
    setCanChangePlan(false)
  }

  const paymentEnd = () => {
    setCanChangePlan(true)
  }

  useEffect(() => {
    paymentCancel({ failed: props.paymentCancelled })
  }, [props.paymentCancelled])

  useEffect(() => {
    setShowPlans(!props.hidePlans)
  }, [props.hidePlans])

  return (
    <React.Fragment>
      <When condition={showPlans}>
        <Plans
          onSubscribePlan={subscribePlan}
          currentPlan={props.currentPlan}
          loading={changePlanMutation.isLoading}
        />
      </When>
      <Box className={classes.parentBox}>
        <When condition={props.job !== 'change'}>
          <Box className={`${classes.fullWidth}`}>
            <PayElement
              job={props.job}
              showForm={!showPlans}
              onPaymentCancel={paymentCancel}
              onPaymentComplete={paymentComplete}
              paymentStart={paymentStart}
              paymentEnd={paymentEnd}
            />
          </Box>
        </When>
        <When condition={planInfo}>
          <Plan plan={planInfo} className={classes.margins}>
            <Button
              className={classes.changePlanButton}
              disableElevation
              variant="contained"
              disabled={!canChangePlan}
              onClick={() => paymentCancel()}
            >
              Change Plan
            </Button>
          </Plan>
        </When>
      </Box>
    </React.Fragment>
  )
}

export default SubscriptionItems
