const validate = (values, module = '') => {
  const errors = {}
  if (module === 'signIn' || module === 'signUp') {
    if (!values.password) {
      // errors.password = 'The password field is required.';
    } else if (values.password.length < 6) {
      errors.password =
        'Sorry, password needs to at least 7 digits with upper and lower case.'
    }
  }

  if (!values.name && module === 'signUp') {
    // errors.name = 'The name field is required.';
  }

  if (!values.email) {
    // errors.email = 'The email field is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please include an "@" in the email address. '
  }
  return errors
}

const isEmpty = (str) => !str || str.length === 0

export { validate, isEmpty }
