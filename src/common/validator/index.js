import * as Yup from 'yup'

const phoneregex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

export const userDetailsSchema = Yup.object().shape({
  email: Yup.string().email().required('Email Address is a required field.'),
  name: Yup.string().required('Name is a required field.'),
  user_role: Yup.string().required('User Role is a required field.'),
  user_avatar: Yup.mixed().test(
    'checkFileSize',
    `File size should be less than 2MB`,
    (document) => {
      if (document && document[0] && document[0].size) {
        return document[0].size <= 2 * 1024 * 1024
      }
      return true
    }
  ),
})

export const ChangePasswordSchema = Yup.object().shape({
  old_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is a required field.'),
  new_password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is a required field.'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm password is required filed.'),
})
