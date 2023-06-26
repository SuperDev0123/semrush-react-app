import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import {
  Box,
  Button,
  Typography,
  List,
  ListItemText,
  Modal,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'
import { When, Loader, SkeletonLoader, Toaster } from '@src/common/components'

import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import {
  getUserBilling,
  cancelSubscription,
  resumeSubscription,
} from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import Subscription from '@src/routes/Subscription'
import { showLoader } from '@src/common/redux/actions/ShowLoader'
import { Check } from '@material-ui/icons'
import useStyles from '../style/SubscriptionPlan.style'

const SubscriptionPlan = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [subscription, setSubscription] = useState(null)
  const [isCancelling, setIsCancelling] = useState(false)
  const [isUserSubscribed, setIsUserSubscribed] = useState(false)
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  const [isChangingPlan, setIsChangingPlan] = useState(false)

  const getUserBillingMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    mutationFn: getUserBilling,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      dispatch(showLoader(false))
      setSubscription(data.subscription)
      setIsUserSubscribed(data.is_user_subscribed)
      setIsCancelling(data.is_cancelling)
    },
    onError: (error) => {
      dispatch(fetchError(error.response.data.error))
    },
  })

  const cancelSubscriptionMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CANCEL_SUBSCRIPTION,
    mutationFn: cancelSubscription,
    onSuccess: () => {
      Toaster.success('subscription cancel successfully')
      dispatch(fetchSuccess())
      dispatch(showLoader(false))
      setIsUserSubscribed(false)
      setSubscription(null)
      setIsCancelModalOpen(false)
      getUserBillingMutation.mutate(null)
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

  const resumeSubscriptionMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_RESUME_SUBSCRIPTION,
    mutationFn: resumeSubscription,
    onSuccess: () => {
      dispatch(fetchSuccess())
      dispatch(showLoader(false))
      getUserBillingMutation.mutate(null)
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

  const startChangingPlan = () => {
    setIsChangingPlan(true)
  }

  const paymentComplete = (needReload = false) => {
    isUserSubscribed && isChangingPlan && setIsChangingPlan(false)
    dispatch(showLoader(true))
    getUserBillingMutation.mutate(null)
    needReload && props.onSubscriptionChange()
  }

  const paymentFail = () => {
    isUserSubscribed && isChangingPlan && setIsChangingPlan(false)
    dispatch(showLoader(true))
    getUserBillingMutation.mutate(null)
  }

  const beforeResumeSubscription = () => {
    dispatch(showLoader(true))
    resumeSubscriptionMutation.mutate(null)
  }

  const beforeCancelSubscription = () => {
    dispatch(showLoader(true))
    cancelSubscriptionMutation.mutate(null)
  }

  useEffect(() => {
    dispatch(showLoader(true))
    getUserBillingMutation.mutate(null)
  }, [])

  return (
    <React.Fragment>
      <Box className={classes.parentBox}>
        <Box className={classes.blockheaderBox}>
          <Typography variant="h3" className={classes.blockHeader}>
            Subscription Plan
          </Typography>
          <When
            condition={
              getUserBillingMutation.isSuccess &&
              isUserSubscribed &&
              !isCancelling
            }
          >
            <Typography variant="h3" className={classes.blockSubHeader}>
              Your Plan
            </Typography>
          </When>
        </Box>
        <When condition={getUserBillingMutation.isLoading}>
          <SkeletonLoader width={400} height={300} variant="rect" />
        </When>
        <When condition={getUserBillingMutation.isSuccess}>
          <When condition={isUserSubscribed}>
            <When condition={isCancelling}>
              <Box className={classes.controlBox} sx={{ mt: 0 }}>
                <Typography component="p" className={classes.hintText}>
                  Having second thoughts about cancelling your subscription? You
                  can instantly reactive your subscription at any time until the
                  end of your current billing cycle. After your current billing
                  cycle ends, you may choose an entirely new subscription plan.
                </Typography>
                <Button
                  className={classes.resumeActionBox}
                  disableElevation
                  onClick={beforeResumeSubscription}
                >
                  <When condition={resumeSubscriptionMutation.isLoading}>
                    <Loader size={25} color="white" />
                  </When>{' '}
                  Resume Subscription
                </Button>
              </Box>
            </When>
            <When condition={!isCancelling}>
              <Box>
                <Box className={classes.planBox}>
                  <Box className={classes.planHeaderBox}>
                    <Typography className={classes.planName} variant="h3">
                      {subscription.plan.name}
                    </Typography>
                    <Typography className={classes.planPrice} variant="h4">
                      ${subscription.plan.price} / Per Month
                    </Typography>
                  </Box>
                  <Box className={classes.planFeaturesBox}>
                    <List>
                      {subscription.plan.features.map((feature, index) => (
                        <ListItem
                          key={index}
                          className={classes.planFeatureListItem}
                        >
                          <ListItemIcon className={classes.featureListItemIcon}>
                            <Check />
                          </ListItemIcon>
                          <ListItemText
                            className={classes.listText}
                            primary={feature}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                  <Box className={classes.planActionBox}>
                    <Button
                      className={classes.planActionButton}
                      onClick={startChangingPlan}
                    >
                      <When condition={isChangingPlan}>
                        <Loader size={25} color="white" />
                      </When>{' '}
                      Change Plan
                    </Button>
                  </Box>
                </Box>
                <Box className={classes.controlBox}>
                  <Typography component="p" className={classes.hintText}>
                    You may cancel your subscription at any time. Once your
                    subscription has been cancelled, you will have the option to
                    resume the subscription until the end of your current
                    billing cycle.
                  </Typography>
                  <Button
                    className={classes.cancelActionButton}
                    disableElevation
                    onClick={() => setIsCancelModalOpen(true)}
                  >
                    Cancel Subscription
                  </Button>
                  <Modal
                    open={isCancelModalOpen}
                    onClose={() => setIsCancelModalOpen(false)}
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                  >
                    <Box className={classes.cancelModalBox}>
                      <Typography
                        id="modal-title"
                        variant="h6"
                        component="h2"
                        className={classes.cancelModalTitle}
                      >
                        Subscription Cancelation
                      </Typography>
                      <Typography
                        id="modal-description"
                        className={classes.cancelModalDescription}
                      >
                        Are you sure want tocancel the subscription? Please
                        remember that you will not be able to undo this action.
                      </Typography>
                      <Box className={classes.cancelModalActionsBox}>
                        <Button
                          onClick={() => setIsCancelModalOpen(false)}
                          className={classes.cancelModalCancelAction}
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={beforeCancelSubscription}
                          className={classes.cancelModalAcceptAction}
                        >
                          <When
                            condition={cancelSubscriptionMutation.isLoading}
                          >
                            <Loader size={25} color="white" />
                          </When>{' '}
                          Yes, I'm sure
                        </Button>
                      </Box>
                    </Box>
                  </Modal>
                </Box>
              </Box>
            </When>
            <When condition={isChangingPlan}>
              <Subscription
                job="change"
                currentPlan={subscription.plan}
                paymentComplete={() => paymentComplete(true)}
                paymentFail={paymentFail}
              />
            </When>
          </When>
          <When condition={!isUserSubscribed}>
            <Subscription
              job="subscribe"
              noModal={true}
              paymentComplete={() => paymentComplete(true)}
              paymentFail={paymentFail}
            />
          </When>
        </When>
      </Box>
    </React.Fragment>
  )
}

export default SubscriptionPlan
