import * as React from 'react'

import CheckoutCore from '@src/routes/Checkout'

import { Container } from '../../components'
import useCheckoutStyles from './Checkout.styles'

const Checkout = () => {
  const classes = useCheckoutStyles()

  return (
    <Container wrapperClass={classes.container}>
      <CheckoutCore />
    </Container>
  )
}

export default Checkout
