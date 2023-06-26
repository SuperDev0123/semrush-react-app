import React, { useState, useContext, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import { Grid, Box, Typography, Button } from '@material-ui/core'
import { MetaProvider, Toaster, When, SkeletonLoader } from '@src/common/components'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import { confirmPollPayment, launchPoll, checkCoupon } from '@src/common/api'
import { AccessControlContext } from '@src/common/context/AccessControl'
import {
  pollCreateMessage,
  pollCreateMessageFail,
} from '@src/common/redux/actions/pollCreateMessage'
import { costPerResponse } from '@src/common/constants'
import {
  clearPoll,
  clearAudience,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { showLoader } from '@src/common/redux/actions/ShowLoader'
import { notificationData } from '@src/common/redux/actions/Notification'
import queryKeys from '@src/common/queryKeys'
import {
  savePollItemAfterCreation,
  previewPoll,
  getCouponCode,
  removeCouponCode,
} from '@src/common/functions/tools'
import { PaymentMethod } from '@src/routes/Billing/common/components'
import PayElement from '@src/routes/Subscription/common/components/PayElement'
import { ActionButtons, CriteriasList, GuarantiedBlock, CouponInput } from './blocks'
import { useStyles } from './style'

/** *TODO: STORE TRANSFORMATION***/
import { priceBoxTotalPrice } from '../PollCreation/common/utils'
import { PollCreationContext } from '../PollCreation/common/context/PollCreationContext'
import { pollCreationSteps } from '../PollCreation/common/constants'
import { Storage } from '../PollCreation/common/services'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'

const Checkout = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [estimatedTime, setEstimatedTime] = useState(30)
  const [isVerifyCard, setIsVerifyCard] = useState(false)
  const [paymentSecret, setPaymentSecret] = useState('')
  const [pollInformation, setPollInformation] = useState(null)
  const [pollId, setPollId] = useState(0)
  const [pollPreviewSlug, setPollPreviewSlug] = useState('')
  const [couponInfo, setCouponInfo] = useState(null)
  const [isUpdatingCoupon, setIsUpdatingCoupon] = useState(false)


  const { setLayout } = useContext(AppContext)
  const pollCreationFlow = useContext(PollCreationContext)
  const audienceFlow = pollCreationFlow[pollCreationSteps.AUDIENCE]

  const {
    accessControl: { costInformation },
  } = useContext(AccessControlContext)
  const PollCreateGetMessageData = useSelector(
    (state) => state.PollCreateGetMessage
  )
  const ShowLoaderData = useSelector((state) => state.ShowLoaderGet)

  const launchPollMutation = useMutation({
    mutationKey: queryKeys.LAUNCH_POLL,
    mutationFn: launchPoll,
    onSuccess: (data) => {
      Toaster.success(data.msg, {
        duration: 3000,
      })
      removeCouponCode()
      if (data.needs_verification) {
        setPaymentSecret(data.token)
        setPollInformation(data.poll_information)
        setIsVerifyCard(true)
      } else {
        manageSuccessFeedback(data)
      }
    },
    onError: (e) => {
      const responseMessage = e.response.data
        ? e.response.data.msg
        : 'An error occurred while publish poll.'
      Toaster.error(responseMessage, {
        duration: 3000,
      })
      dispatch(showLoader(false))
      setIsVerifyCard(false)
      dispatch(pollCreateMessageFail(responseMessage))
    },
  })

  const confirmPollPaymentMutation = useMutation({
    mutationKey: queryKeys.CONFIRM_POLL_PAYMENT,
    mutationFn: confirmPollPayment,
    onSuccess: (data) => {
      manageSuccessFeedback(data)
    },
    onError: (e) => {
      const responseMessage = e.response.data
        ? e.response.data.msg
        : 'An error occurred while publish poll.'
      Toaster.error(responseMessage, {
        duration: 3000,
      })
      dispatch(showLoader(false))
      setIsVerifyCard(false)
      dispatch(pollCreateMessageFail(responseMessage))
    },
  })

  const checkCouponMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHECK_COUPON,
    mutationFn: checkCoupon,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      if (data.couponInfo) {
        setCouponInfo({ type: 'Coupon', ...data.couponInfo })
      }
      else if (data.promotionInfo) {
        setCouponInfo({ type: 'Promotion Code', ...data.promotionInfo.coupon, name: data.promotionInfo.code, promotionID: data.promotionInfo.id })
      }
      else {
        removeCouponCode()
        Toaster.error('Your promotion code is expired.',
          {
            duration: 3000,
          }
        )
      }
    },
    onError: (error) => {
      console.log(error)
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(fetchError(error.response.data.error))
    },
  })

  const isAnyRequestLoading = useMemo(() => {
    return checkCouponMutation.isLoading
  }, [checkCouponMutation.isLoading])

  const sendData = () => {
    if (isAnyRequestLoading) return
    const data = {
      estimatedTime,
      costPerResponse,
      coupon: couponInfo ? couponInfo : null,
      pollJob: {
        ...audienceFlow,
        criterias: audienceFlow.selectedCriteriaList
          .filter((item) => !!item.price)
          .map((item) => ({
            id: item.id,
            label: item.label,
            price: item.price,
            value: item.country.value || item.trueFalse.value,
            comparision: item.comparison.value || '',
          })),
      },
    }

    dispatch(showLoader(true))
    launchPollMutation.mutate({ data, poll_id: pollId })
  }

  const onPreview = () => {
    previewPoll({
      poll_id: pollId,
      preview_slug: pollPreviewSlug,
    })
  }

  const totalPrice = priceBoxTotalPrice({
    audience: audienceFlow,
    selectedCriteriaList: audienceFlow.selectedCriteriaList,
    costInformation,
  })

  const onPaymentFailed = (result) => {
    setIsVerifyCard(false)
    dispatch(pollCreateMessageFail(result))
  }

  const onPaymentSuccess = (paymentIntent) => {
    confirmPollPaymentMutation.mutate({
      data: { paymentIntent, pollInformation },
      poll_id: pollId,
    })
  }

  const manageSuccessFeedback = (data) => {
    const pollKey = `${pollCreationFlow.templateID}-${pollCreationSteps.DESIGN}`
    const pollDataStorage = Storage.get(pollKey, true)
    savePollItemAfterCreation(pollDataStorage)
    setIsVerifyCard(false)
    dispatch(pollCreateMessage(data.msg))
    data.user && dispatch(notificationData(data.user.unread_notifications))
    Storage.delete(pollKey)
  }

  const showUpdateCoupon = () => {
    setIsUpdatingCoupon(true)
  }

  const hideUpdateCoupon = () => {
    setIsUpdatingCoupon(false)
  }

  const couponDescription = (couponData) => {
    return `${couponData.percent_off ? (couponData.percent_off + '%') : ''} ${couponData.amount_off ? ((couponData.amount_off / 100).toFixed(2) + ' ' + couponData.currency.toUpperCase()) : ''} Discount ${couponData.type}.`
  }

  const checkLocalStorageCoupon = () => {
    const couponCode = getCouponCode()
    if (couponCode) {
      checkCouponMutation.mutate({ couponCode })
    }
  }

  useEffect(() => {
    const pollDataStorage = Storage.get(
      `${pollCreationFlow.templateID}-${pollCreationSteps.DESIGN}`,
      true
    )
    setLayout('vertical-minimal')
    setPollId(pollDataStorage.poll_id ?? 0)
    setPollPreviewSlug(pollDataStorage.preview_slug)
    checkLocalStorageCoupon()
  }, [])

  useEffect(() => {
    if (audienceFlow.pollResponses > 100) {
      setEstimatedTime(Math.ceil(audienceFlow.pollResponses / 100) * 30)
    }

    if (ShowLoaderData && !!PollCreateGetMessageData.pollMessage) {
      dispatch(clearPoll())
      dispatch(clearAudience())
      dispatch(unsubscribe())
      dispatch(showLoader(false))
      dispatch(pollCreateMessage(''))
      Swal.fire({
        title: 'Success',
        text: PollCreateGetMessageData.pollMessage,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/launch-poll')
        }
      })

      Swal.clickConfirm()
    }

    if (ShowLoaderData && !!PollCreateGetMessageData.pollMessageFail) {
      Swal.fire({
        title: 'Error',
        text: PollCreateGetMessageData.pollMessageFail,
        icon: 'error',
        confirmButtonText: 'OK',
      }).then(() => {
        dispatch(pollCreateMessageFail(''))
      })
    }
  })

  return (
    <MetaProvider title="Checkout">
      <PageContainer className={classes.root}>
        <GridContainer>
          <Grid item xs={12}>
            <Box className={classes.reviewTable}>
              <Grid container>
                <Box className={classes.checkoutInfoWrapper}>
                  <Typography className={classes.checkoutInfoTitle}>
                    Your Test Costs
                  </Typography>
                  <CriteriasList
                    totalprice={totalPrice}
                    classes={classes}
                    couponInfo={couponInfo}
                    audience={audienceFlow}
                    costInformation={costInformation}
                  />
                </Box>
                <Box className={classes.couponInfoWrapper}>
                  <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item>
                      <Typography className={classes.couponInfoTitle}>
                        Coupon / Promo Code
                      </Typography>
                    </Grid>
                    <When condition={Boolean(couponInfo)}>
                      <Grid item>
                        <Typography className={classes.couponCancelBtn} onClick={showUpdateCoupon}>
                          cancel
                        </Typography>
                      </Grid>
                    </When>
                  </Grid>
                  <When condition={isAnyRequestLoading}>
                    <SkeletonLoader width={'50%'} height={62} classes={classes.skeleton} />
                  </When>
                  <When condition={!isAnyRequestLoading}>
                    <When condition={!Boolean(couponInfo)}>
                      <Box>
                        <Button
                          className={classes.couponButton}
                          onClick={showUpdateCoupon}
                        >
                          Enter Promo Code
                        </Button>
                      </Box>
                    </When>
                    <When condition={Boolean(couponInfo)}>
                      <Box className={classes.couponInfoBox}>
                        <Box>
                          <Typography className={classes.couponName}>
                            {couponInfo && couponInfo.name}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>
                            {couponInfo && couponDescription(couponInfo)}
                          </Typography>
                        </Box>
                      </Box>
                    </When>
                    <When condition={isUpdatingCoupon}>
                      <CouponInput
                        couponInfo={couponInfo}
                        setCouponInfo={setCouponInfo}
                        hideUpdateCoupon={hideUpdateCoupon}
                        couponDescription={couponDescription}
                      />
                    </When>
                  </When>
                </Box>
                <PaymentMethod />
                <GuarantiedBlock classes={classes} />
                <ActionButtons
                  classes={classes}
                  sendData={sendData}
                  onPreview={onPreview}
                  isLoading={launchPollMutation.isLoading}
                />
              </Grid>
            </Box>
          </Grid>
        </GridContainer>
        <PayElement
          verify
          secret={paymentSecret}
          startCardVerify={isVerifyCard}
          paymentFailed={onPaymentFailed}
          paymentSuccess={onPaymentSuccess}
        />
      </PageContainer>
    </MetaProvider>
  )
}

export default Checkout
