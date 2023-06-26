import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import classnames from 'classnames'
import { Box, Typography, Button } from '@material-ui/core'

import { When, SkeletonLoader, Toaster } from '@src/common/components'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { getUserBilling } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import Subscription from '@src/routes/Subscription'
import { paymentMethodKeys } from '../constants'

import useStyles from '../style/PaymentMethod.style'

const PaymentMethod = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [isUpdatingPaymentMethod, setIsUpdatingPaymentMethod] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState(paymentMethodKeys)

  const getUserBillingMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    mutationFn: getUserBilling,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setPaymentMethod(data.payment_method)
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

  const isAnyRequestLoading = useMemo(() => {
    return getUserBillingMutation.isLoading
  }, [getUserBillingMutation.isLoading])

  const showUpdatePaymentMethods = () => {
    setIsUpdatingPaymentMethod(true)
  }

  const paymentComplete = () => {
    getUserBillingMutation.mutate(null)
    setIsUpdatingPaymentMethod(false)
  }

  const paymentFail = () => {
    getUserBillingMutation.mutate(null)
    setIsUpdatingPaymentMethod(false)
  }

  const getCardCompanyIcon = (company) => {
    return (
      <img
        src={`/images/icons/${company}.svg`}
        width="55px"
        height="37px"
        alt="payment company"
      />
    )
  }

  useEffect(() => {
    getUserBillingMutation.mutate(null)
  }, [])

  return (
    <Box className={classnames(classes.parentBox, 'inspectlet-sensitive')}>
      <Box className={classes.blockheaderBox}>
        <Typography variant="h3" className={classes.blockHeader}>
          Payment Information
        </Typography>
        <When condition={getUserBillingMutation.isSuccess}>
          <Typography variant="h3" className={classes.blockSubHeader}>
            Credit Card
          </Typography>
        </When>
      </Box>
      <When condition={isAnyRequestLoading}>
        <SkeletonLoader width={'50%'} height={62} classes={classes.skeleton} />
        <SkeletonLoader width={100} height={40} style={{ margin: '10px 0' }} />
      </When>
      <When condition={getUserBillingMutation.isSuccess}>
        <Box className={classes.cardInfo}>
          <Box className={classes.cardBrand}>
            {getCardCompanyIcon(paymentMethod.card_brand)}
          </Box>
          <Box className={classes.cardNumber}>
            <Typography className={classes.cardNumber}>
              xxxx xxxx xxxx {paymentMethod.card_last4}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            className={classes.updateButton}
            onClick={showUpdatePaymentMethods}
          >
            Update
          </Button>
        </Box>
      </When>
      <When condition={isUpdatingPaymentMethod}>
        <Subscription
          job="update"
          hidePlans
          paymentComplete={paymentComplete}
          paymentFail={paymentFail}
        />
      </When>
    </Box>
  )
}

export default PaymentMethod
