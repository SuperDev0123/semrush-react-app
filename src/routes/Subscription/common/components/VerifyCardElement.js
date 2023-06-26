import { useEffect } from 'react'
import { useStripe } from '@stripe/react-stripe-js'

const VerifyCardElement = (props) => {
  const stripe = useStripe()

  useEffect(() => {
    stripe &&
      stripe.confirmCardPayment(props.secret).then((result) => {
        result.error
          ? props.paymentFailed(result.error.message)
          : props.paymentSuccess(result.paymentIntent)
      })
  }, [])

  return null
}

export default VerifyCardElement
