import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { makeStyles, Box } from '@material-ui/core'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { When, Toaster } from '@src/common/components'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { getSetupSecret } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import CheckoutElement from './CheckoutElement'
import VerifyCardElement from './VerifyCardElement'
import { AccessControlContext } from '@src/common/context/AccessControl'

const stripePromise = loadStripe(process.env.MIX_STRIPE_PUBLISHABLE_KEY)

const useStyles = makeStyles({
  parentBox: {
    width: '100%',
  },
})

const PayElement = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { setIsLoading } = useContext(AccessControlContext)
  const [clientSecret, setClientSecret] = useState('')
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  let isMounted = true

  const getSetupSecretMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_SETUP_SECRET,
    mutationFn: getSetupSecret,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setIsLoading(false)
      if (!clientSecret) {
        isMounted && setClientSecret(data.client_secret)
      }
      isMounted && setShowPaymentForm(true)
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

  const paymentCancel = (parentProps = {}) => {
    if (!parentProps.failed) {
      isMounted && setShowPaymentForm(false)
    }

    props.onPaymentCancel(parentProps)
  }

  useEffect(() => {
    setIsLoading(true)
    getSetupSecretMutation.mutate(null)
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Box className={classes.parentBox}>
      <When condition={clientSecret}>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <When condition={!props.verify && props.showForm && showPaymentForm}>
            <CheckoutElement
              clientSecret={clientSecret}
              job={props.job}
              paymentStart={props.paymentStart}
              paymentEnd={props.paymentEnd}
              onPaymentCancel={paymentCancel}
              onPaymentComplete={props.onPaymentComplete}
            />
          </When>
          <When condition={props.verify && props.startCardVerify}>
            <VerifyCardElement
              paymentFailed={props.paymentFailed}
              paymentSuccess={props.paymentSuccess}
              secret={props.secret}
            />
          </When>
        </Elements>
      </When>
    </Box>
  )
}

export default PayElement
