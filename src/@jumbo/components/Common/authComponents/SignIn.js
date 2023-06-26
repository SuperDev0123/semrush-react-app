import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import classnames from 'classnames'
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControlLabel,
  Switch,
} from '@material-ui/core'
import { useHistory } from 'react-router'

import { login } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { useStyles } from '@src/routes/Auth/styles'
import { useAuthUserQuery } from '@src/common/hooks'
import { browserRoutes } from '@src/common/browserRoutes'
import { LOGIN_FORM_INITIALS } from '@src/common/constants'
import { GMTCycles } from '@src/common/functions/GMTCycles'
import { When, Alert, Captcha, Loader, Toaster } from '@src/common/components'
import CmtImage from '@src/@coremat/CmtImage'
import IntlMessages from '@src/@jumbo/utils/IntlMessages'

import {
  authenticationRememberMe,
  getRememberedAuthData,
  setUserDataAfterAuthorize,
} from '@src/common/functions/tools'
import { validate, isEmpty } from './validate'
import AuthWrapper from './AuthWrapper'
import { openSetupModal } from '@src/common/redux/actions/Dashboard'
import { getAttemptURL } from '../../../../common/functions/tools'

const SignIn = ({ variant = 'default', wrapperVariant = 'default' }) => {
  const classes = useStyles({ variant })
  const dispatch = useDispatch()
  const history = useHistory()
  const [remember, setRemember] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [isCaptchaValid, setIsCaptchaValid] = useState(true)

  const authUserQuery = useAuthUserQuery({ enabled: isLogged })

  const attemptURL = getAttemptURL()

  const loginMutation = useMutation({
    mutationFn: login,
    mutationKey: queryKeys.AUTHENTICATION_LOGIN,
    onSuccess: (data, variables) => {
      GMTCycles.afterLogin()
      setIsLogged(true)
      dispatch(openSetupModal())
      authenticationRememberMe(remember, variables)
      setUserDataAfterAuthorize(data)
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
    initialValues: LOGIN_FORM_INITIALS,
    validate: (values) => validate(values, 'signIn'),
    onSubmit: (values) => {
      if (loginMutation.isLoading || authUserQuery.isLoading) return
      loginMutation.mutate(values)
    },
  })

  useEffect(() => {
    getRememberedAuthData(setRemember, formik)
  }, [])

  const submitButtonClass =
    formik.values.email.trim().length > 0 &&
    isEmpty(formik.errors.email) &&
    formik.values.password.trim().length > 0 &&
    isEmpty(formik.errors.password)
      ? classes.submitButtonBlue
      : classes.submitButton
  const isValidForm = !formik.values.email || !formik.values.password
  return (
    <AuthWrapper variant={wrapperVariant}>
      <When condition={variant === 'default'}>
        <Box className={classes.authThumb}>
          <CmtImage
            src={'/images/auth/login-img.png'}
            className={classes.logo}
          />
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
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          Welcome back,
        </Typography>
        <Typography
          component="div"
          variant="h4"
          className={classes.subTitleRoot}
        >
          Please enter your email and password to continue
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <label className={classes.labelRoot}>Email</label>
            <TextField
              inputProps={{
                placeholder: 'john.doe@pollthepeople.com',
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
              helperText={(formik.touched.email && formik.errors.email) || ''}
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
                placeholder: '*******',
                style: {
                  color: 'black',
                  fontWeight: 'regular',
                  padding: '11px 20px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  backgroundColor: 'white',
                },
              }}
              id="password"
              type="password"
              fullWidth
              error={
                formik.touched.password && !isEmpty(formik.errors.password)
              }
              helperText={
                (formik.touched.password && formik.errors.password) || ''
              }
              margin="normal"
              variant="outlined"
              className={classnames(classes.textFieldRoot, 'inspectletIgnore')}
              {...formik.getFieldProps('password')}
            />
          </Box>
          <When condition={!!loginMutation.error}>
            <Box mb={2}>
              <Alert variant="filled" severity="error">
                {loginMutation.error && loginMutation.error.response.data.message}
              </Alert>
            </Box>
          </When>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <FormControlLabel
              label="Remember me"
              className={classes.formcontrolLabelRoot}
              control={
                <Switch
                  onChange={(event) => setRemember(event.target.checked)}
                  checked={remember}
                  name="remember"
                  color="primary"
                />
              }
            />
          </Box>
          <Captcha setIsCaptchaValid={setIsCaptchaValid} />
          <Box mb={2} mt={5} display="block">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={
                Object.keys(formik.errors).length > 0 ||
                isValidForm ||
                loginMutation.isLoading ||
                authUserQuery.isLoading ||
                isCaptchaValid
              }
              className={submitButtonClass}
            >
              <When condition={loginMutation.isLoading}>
                <Loader size={25} color="white" />
              </When>
              <IntlMessages id="appModule.signIn" />
            </Button>
          </Box>
          <Box component="p">
            <NavLink to="/forgot-password" className={classes.textAcc}>
              <IntlMessages id="appModule.forgotPassword" />
            </NavLink>
          </Box>
        </form>
        <Box mb={2} mt={5} display="block">
          <hr />
          <Typography component="div" variant="h4" className={classes.accntTxt}>
            Don’t have an account?
          </Typography>

          <Box mb={2} mt={5} display="block">
            <NavLink
              to={browserRoutes.SIGN_UP(attemptURL)}
              className={classes.regsLink}
            >
              <IntlMessages id="appModule.register" />
            </NavLink>
          </Box>
        </Box>
      </Box>
    </AuthWrapper>
  )
}

export default SignIn
