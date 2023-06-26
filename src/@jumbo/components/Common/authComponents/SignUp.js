import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import classnames from 'classnames'
import { Box } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import IntlMessages from '@src/@jumbo/utils/IntlMessages'
import CmtImage from '@src/@coremat/CmtImage'
import { register } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import {
  setUserDataAfterAuthorize,
  getAttemptURL,
  setAttemptURL,
} from '@src/common/functions/tools'
import { GMTCycles } from '@src/common/functions/GMTCycles'
import { useAuthUserQuery } from '@src/common/hooks'
import { When, Loader, Captcha, Toaster } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'

import AuthWrapper from './AuthWrapper'
import { validate, isEmpty } from './validate'
import { useSignupStyles } from './styles'

const SignUp = ({ variant = 'default', wrapperVariant = 'default' }) => {
  const classes = useSignupStyles({ variant })
  const history = useHistory()
  const [isLogged, setIsLogged] = useState(false)
  const [isCaptchaValid, setIsCaptchaValid] = useState(true)

  const authUserQuery = useAuthUserQuery({ enabled: isLogged })
  const attemptURL = getAttemptURL()

  const registerMutation = useMutation({
    mutationFn: register,
    mutationKey: queryKeys.AUTHENTICATION_REGISTER,
    onMutate: () => {
      !getAttemptURL() && setAttemptURL()
    },
    onSuccess: (data) => {
      setUserDataAfterAuthorize(data)
      setIsLogged(true)
      GMTCycles.afterRegister()
      history.push(browserRoutes.ACCOUNT_CONFIRMATION(attemptURL))
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
    },
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: (values) => validate(values, 'signUp'),
    onSubmit: (values) => {
      if (authUserQuery.isLoading || registerMutation.isLoading) return
      registerMutation.mutate(values)
    },
  })

  const registerError = registerMutation.error.response.data.errors
  const structuredRegisterError =
    !!registerError && typeof registerError === 'object'
      ? Object.values(registerError)
      : []

  const submitButtonClass =
    /* formik.touched.name && */ formik.values.name.trim().length > 0 &&
    isEmpty(formik.errors.name) &&
    /* formik.touched.email && */ formik.values.email.trim().length > 0 &&
    isEmpty(formik.errors.email) &&
    /* formik.touched.password && */ formik.values.password.trim().length > 0 &&
    isEmpty(formik.errors.password)
      ? classes.submitButtonBlue
      : classes.submitButton

  const isValidForm =
    !formik.values.name || !formik.values.email || !formik.values.password
  return (
    <AuthWrapper variant={wrapperVariant}>
      <When condition={variant === 'default'}>
        <Box className={classes.authThumb}>
          <CmtImage src={'/images/logo-auth.jpg'} className={classes.logo} />
        </Box>
      </When>
      <Box
        className={classes.topBar}
        onClick={() => {
          history.push('/dashboard/home')
        }}
      >
        <CmtImage src={'/images/Top-logo.jpg'} className={classes.topLogo} />
      </Box>
      <Box className={classes.authContent}>
        {/* <Box mb={7}>
                    <CmtImage src={'/images/logo-auth.jpg'} className={classes.logo}/>
                </Box> */}
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          Create new account
        </Typography>
        <Typography
          component="div"
          variant="h4"
          className={classes.subTitleRoot}
        >
          Please enter your information below.
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <When condition={registerMutation.isError}>
              {structuredRegisterError.map((errorItem, idx) => (
                <Box mb={0.5} key={idx}>
                  <Alert variant="filled" severity="error" key={idx}>
                    {errorItem}
                  </Alert>
                </Box>
              ))}
            </When>
          </Box>
          <Box mb={2}>
            <label className={classes.labelRoot}>Name</label>
            <TextField
              inputProps={{
                placeholder: 'john.doe',
                style: {
                  color: 'black',
                  fontWeight: 'regular',
                  padding: '11px 20px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  backgroundColor: 'white',
                },
              }}
              id="name"
              fullWidth
              error={formik.touched.name && !isEmpty(formik.errors.name)}
              helperText={formik.errors.name ? formik.errors.name : ''}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
              {...formik.getFieldProps('name')}
            />
          </Box>
          <Box mb={2}>
            <label className={classes.labelRoot}>Email Address</label>
            <TextField
              inputProps={{
                placeholder: 'enter your email address',
                style: {
                  color: 'black',
                  fontWeight: 'regular',
                  padding: '11px 20px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  backgroundColor: 'white',
                },
              }}
              id="email"
              fullWidth
              error={formik.touched.email && !isEmpty(formik.errors.email)}
              helperText={formik.errors.email ? formik.errors.email : ''}
              margin="normal"
              variant="outlined"
              className={classnames(classes.textFieldRoot, 'inspectletIgnore')}
              {...formik.getFieldProps('email')}
            />
          </Box>
          <Box mb={2}>
            <label className={classes.labelRoot}>Password</label>
            <TextField
              inputProps={{
                placeholder: 'type your password',
                style: {
                  color: 'black',
                  fontWeight: 'regular',
                  padding: '11px 20px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                },
              }}
              id="password"
              type="password"
              fullWidth
              error={
                formik.touched.password && !isEmpty(formik.errors.password)
              }
              helperText={formik.errors.password ? formik.errors.password : ''}
              margin="normal"
              variant="outlined"
              className={classnames(classes.textFieldRoot, 'inspectletIgnore')}
              {...formik.getFieldProps('password')}
            />
          </Box>
          <Box mb={2}>
            <Typography className={classes.termText}>
              By signing up, you agree to Poll the People&apos;s{' '}
              <NavLink
                to={{
                  pathname:
                    'https://www.iubenda.com/terms-and-conditions/28864570',
                }}
                target="_blank"
                style={{ color: '#1978eb' }}
              >
                Terms of Service
              </NavLink>
              and{' '}
              <NavLink
                to={{
                  pathname: 'https://www.iubenda.com/privacy-policy/28864570',
                }}
                target="_blank"
                style={{ color: '#1978eb' }}
              >
                Privacy Policy
              </NavLink>
            </Typography>
          </Box>
          <Captcha setIsCaptchaValid={setIsCaptchaValid} />
          <Box mb={2} mt={5} display="block">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={submitButtonClass}
              disabled={
                Object.keys(formik.errors).length > 0 ||
                isValidForm ||
                authUserQuery.isLoading ||
                registerMutation.isLoading ||
                isCaptchaValid
              }
            >
              <When condition={registerMutation.isLoading}>
                <Loader size={25} color="white" />
              </When>
              <IntlMessages id="appModule.createAnAccount" />
            </Button>
          </Box>
        </form>
        <Typography className={classes.textAcc}>
          Already have an account,
          <NavLink to={browserRoutes.SIGN_IN()}>
            <IntlMessages id="signUp.alreadyAccount" />
          </NavLink>
        </Typography>
      </Box>
    </AuthWrapper>
  )
}

export default SignUp
