/* eslint-disable camelcase */
const createCardElement = (
  elements,
  type,
  mountElementId,
  onChangeFunction,
  options
) => {
  // elements.create('card', options).on('change', (e) => onChangeFunction(e)).mount(mountElementId)
  elements
    .create(type, options)
    .on('change', (e) => onChangeFunction(e))
    .mount(mountElementId)
}

const deleteCardElement = (elements, type) => {
  elements.getElement(type).destroy()
}

const getBillingDetails = (userDetails) => {
  return {
    name: userDetails.name,
    email: userDetails.email,
    address: {
      line1: userDetails.billing_address,
      line2: userDetails.billing_address_line_2,
      state: userDetails.billing_state,
      postal_code: userDetails.billing_postal_code,
      city: userDetails.billing_city,
      country: userDetails.billing_country,
    },
  }
}

const createPaymentMethod = (
  stripe,
  elements,
  clientSecret,
  billing_details
) => {
  return stripe.confirmCardSetup(clientSecret, {
    payment_method: {
      card: elements.getElement('cardNumber'),
      billing_details,
    },
  })
}

export {
  createCardElement,
  deleteCardElement,
  getBillingDetails,
  createPaymentMethod,
}
