import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import classnames from 'classnames'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { Button, Box, Grid, InputLabel, Typography } from '@material-ui/core'
import { When, Alert, Loader, Toaster } from '@src/common/components'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { getUserBilling, getCountryList } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import {
  createCardElement,
  deleteCardElement,
  createPaymentMethod,
  getBillingDetails,
} from '../utils'
import { addressKeys, cardelementOptions } from '../constants'
import {
  useStyles,
  InputElement,
  SelectElement,
} from '../style/CheckoutElement.style'

const CheckoutForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const classes = useStyles()
  const dispatch = useDispatch()
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false)
  const [cardNumberError, setCardNumberError] = useState(false)
  const [cardExpiryError, setCardExpiryError] = useState(false)
  const [cardCvcError, setCardCvcError] = useState(false)
  const [formSubmitError, setFormSubmitError] = useState(null)
  const [countries, setCountries] = useState({})
  const [newAddress, setNewAddress] = useState(addressKeys)

  const getUserBillingMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    mutationFn: getUserBilling,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setNewAddress(data.address)
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

  const getCountryListMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_COUNTRY_LIST,
    mutationFn: getCountryList,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setCountries(data)
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

  const formSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return

    if (formSubmitError) {
      setFormSubmitError(null)
    }
    !hasSubmittedForm && setHasSubmittedForm(true)

    if (!Object.keys(countries).includes(newAddress.country)) {
      setAddressError(true)
      setLoadingPayment(false)
    } else if (
      !addressError &&
      !cardNumberError &&
      !cardExpiryError &&
      !cardCvcError
    ) {
      setLoadingPayment(true)
      props.paymentStart()

      const userDetails = JSON.parse(localStorage.getItem('userDetail'))
      const billingDetails = getBillingDetails(userDetails)
      const result = await createPaymentMethod(
        stripe,
        elements,
        props.clientSecret,
        billingDetails
      )

      if (result.error) {
        setLoadingPayment(false)
        setFormSubmitError(result.error.message)
        props.paymentEnd()
      } else {
        props.onPaymentComplete(result.setupIntent.payment_method, newAddress)
      }
    }
  }

  const destroyElement = () => {
    deleteCardElement(elements, 'cardNumber')
    deleteCardElement(elements, 'cardExpiry')
    deleteCardElement(elements, 'cardCvc')
  }

  const cancelPayment = (parentProps = {}) => {
    if (!parentProps.failed) {
      destroyElement()
    }
    props.onPaymentCancel(parentProps)
  }

  const handleInputChange = (e) => {
    const newValue = {
      ...newAddress,
      [e.target.name]: e.target.value,
    }
    setNewAddress(newValue)
  }

  const checkcardElementStatus = (e) => {
    switch (e.elementType) {
      case 'cardNumber':
        setCardNumberError(!e.complete)
        break
      case 'cardExpiry':
        setCardExpiryError(!e.complete)
        break
      case 'cardCvc':
        setCardCvcError(!e.complete)
        break
    }
  }

  useEffect(() => {
    getUserBillingMutation.mutate(null)
    getCountryListMutation.mutate(null)
  }, [])

  useEffect(() => {
    if (elements.getElement('cardNumber')) {
      destroyElement()
    }

    createCardElement(
      elements,
      'cardNumber',
      '#cardNumber',
      checkcardElementStatus,
      cardelementOptions
    )
    createCardElement(
      elements,
      'cardExpiry',
      '#cardExpiry',
      checkcardElementStatus,
      cardelementOptions
    )
    createCardElement(
      elements,
      'cardCvc',
      '#cardCvc',
      checkcardElementStatus,
      cardelementOptions
    )
  }, [elements])

  useEffect(() => {
    const isAddressError =
      !newAddress.line1.length ||
      !newAddress.postal_code.length ||
      !newAddress.state.length ||
      !newAddress.city.length ||
      !newAddress.country.length
    setAddressError(isAddressError)
  }, [newAddress])

  useEffect(() => {
    if (addressError || cardNumberError || cardExpiryError || cardCvcError) {
      setLoadingPayment(false)
    }
  }, [cardNumberError, cardExpiryError, cardCvcError, addressError])

  return (
    <Box className={classnames(classes.parentBox, 'inspectlet-sensitive')}>
      <Box component="form" onSubmit={formSubmit}>
        <When condition={formSubmitError}>
          <Alert className={classes.alertError} severity="error">
            {formSubmitError}
          </Alert>
        </When>
        <Typography className={classes.creditCardTip}>
          This card will be used to pay for credits you purchase and any
          subscription payments.
        </Typography>
        <Box className={classes.boxChild}>
          <Grid item sm={12} md={4} className={classes.gridMargin}>
            <InputLabel htmlFor="cardNumber" className={classes.formLabel}>
              Card No.
            </InputLabel>
            <div
              id="cardNumber"
              className={`${classes.cardsElements} ${
                cardNumberError && classes.cardsElementsError
              }`}
            />
            <When condition={hasSubmittedForm && cardNumberError}>
              <Typography component="p" className={classes.formError}>
                Your card number is incorrect.
              </Typography>
            </When>
          </Grid>
          <Grid item sm={12} md={4} className={classes.gridMargin}>
            <InputLabel htmlFor="cardExpiry" className={classes.formLabel}>
              Expiry Date
            </InputLabel>
            <div
              id="cardExpiry"
              className={`${classes.cardsElements} ${
                cardExpiryError && classes.cardsElementsError
              }`}
            />
            <When condition={hasSubmittedForm && cardExpiryError}>
              <Typography component="p" className={classes.formError}>
                Your card expiration date is incorrect.
              </Typography>
            </When>
          </Grid>
          <Grid item sm={12} md={4}>
            <InputLabel htmlFor="cardCvc" className={classes.formLabel}>
              CVC
            </InputLabel>
            <div
              id="cardCvc"
              className={`${classes.cardsElements} ${
                cardCvcError && classes.cardsElementsError
              }`}
            />
            <When condition={hasSubmittedForm && cardCvcError}>
              <Typography component="p" className={classes.formError}>
                Your card CVC number is incorrect.
              </Typography>
            </When>
          </Grid>
        </Box>
        <Box className={classes.boxChild}>
          <Grid item sm={12}>
            <Box>
              <InputLabel
                htmlFor="address_line_1"
                className={classes.formLabel}
              >
                Address
              </InputLabel>
              <InputElement
                id="address_line_1"
                key="line1"
                name="line1"
                value={newAddress.line1}
                onChange={handleInputChange}
                error={hasSubmittedForm && !newAddress.line1.trim()}
                fullWidth
              />
              <When condition={hasSubmittedForm && !newAddress.line1.trim()}>
                <Typography component="p" className={classes.formError}>
                  Address line 1 can not be empty
                </Typography>
              </When>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.boxChild}>
          <Grid item sm={12}>
            <Box>
              <InputLabel
                htmlFor="address_line_2"
                className={classes.formLabel}
              >
                Address 2
              </InputLabel>
              <InputElement
                id="address_line_2"
                key="line2"
                name="line2"
                value={newAddress.line2}
                onChange={handleInputChange}
                error={false}
                fullWidth
              />
            </Box>
          </Grid>
        </Box>
        <Box className={classes.boxChild}>
          <Grid item sm={12} md={6} className={classes.gridMargin}>
            <Box>
              <InputLabel htmlFor="city" className={classes.formLabel}>
                City
              </InputLabel>
              <InputElement
                id="city"
                key="city"
                name="city"
                value={newAddress.city}
                onChange={handleInputChange}
                error={hasSubmittedForm && !newAddress.city.trim()}
                fullWidth
              />
              <When condition={hasSubmittedForm && !newAddress.city.trim()}>
                <Typography component="p" className={classes.formError}>
                  City can not be empty
                </Typography>
              </When>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <InputLabel htmlFor="state" className={classes.formLabel}>
                State
              </InputLabel>
              <InputElement
                id="state"
                key="state"
                name="state"
                value={newAddress.state}
                onChange={handleInputChange}
                error={hasSubmittedForm && !newAddress.state.trim()}
                fullWidth
              />
              <When condition={hasSubmittedForm && !newAddress.state.trim()}>
                <Typography component="p" className={classes.formError}>
                  State can not be empty
                </Typography>
              </When>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.boxChild}>
          <Grid item sm={12} md={6} className={classes.gridMargin}>
            <Box>
              <InputLabel htmlFor="country" className={classes.formLabel}>
                Country
              </InputLabel>
              <SelectElement
                id="country"
                key="country"
                name="country"
                value={newAddress.country}
                onChange={handleInputChange}
                error={hasSubmittedForm && !newAddress.country.trim()}
                fullWidth
                disableUnderline
              >
                <option
                  key="none"
                  value=""
                  style={{ display: 'none' }}
                  disabled
                >
                  Select a country
                </option>
                {Object.entries(countries).map((country, index) => (
                  <option key={index} value={country[0]}>
                    {country[1]}
                  </option>
                ))}
              </SelectElement>
              <When condition={hasSubmittedForm && !newAddress.country.trim()}>
                <Typography component="p" className={classes.formError}>
                  Country can not be empty
                </Typography>
              </When>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box>
              <InputLabel htmlFor="postal_code" className={classes.formLabel}>
                ZIP Code
              </InputLabel>
              <InputElement
                id="postal_code"
                key="postal_code"
                name="postal_code"
                value={newAddress.postal_code}
                onChange={handleInputChange}
                error={hasSubmittedForm && !newAddress.postal_code.trim()}
                fullWidth
              />
              <When
                condition={hasSubmittedForm && !newAddress.postal_code.trim()}
              >
                <Typography component="p" className={classes.formError}>
                  ZIP Code can not be empty
                </Typography>
              </When>
            </Box>
          </Grid>
        </Box>
        <Box className={classes.buttonsWrapper}>
          <When condition={props.job === 'update'}>
            <Button
              className={classes.cancelButton}
              disabled={hasSubmittedForm && loadingPayment}
              disableElevation
              disableRipple
              onClick={() => cancelPayment({ failed: true })}
            >
              Cancel
            </Button>
          </When>
          <Button
            className={classes.submitButton}
            disabled={hasSubmittedForm && loadingPayment}
            type="submit"
            disableElevation
            disableRipple
          >
            <When condition={hasSubmittedForm && loadingPayment}>
              <Loader size={25} color="white" />
            </When>{' '}
            {props.job === 'update' ? 'Update Payment Information' : 'Submit'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutForm
