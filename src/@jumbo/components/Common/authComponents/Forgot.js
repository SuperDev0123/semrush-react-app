import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import TextField from '@material-ui/core/TextField'
import { Box, alpha, Button, Typography } from '@material-ui/core'

import IntlMessages from '@src/@jumbo/utils/IntlMessages'
import ContentLoader from '@src/@jumbo/components/ContentLoader'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CmtImage from '@src/@coremat/CmtImage'
import AuthWrapper from '@src/@jumbo/components/Common/authComponents/AuthWrapper'
import {
  validate,
  isEmpty,
} from '@src/@jumbo/components/Common/authComponents/validate'
import { forgetPasswordMessage } from '@src/common/redux/actions/ForgetPasswordMessage'
import { When, Alert, Loader, Toaster } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import { changePassword } from '@src/common/api'
import { GMTCycles } from '@src/common/functions/GMTCycles'

const useStyles = makeStyles((theme) => ({
  authThumb: {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      order: 2,
    },
  },
  authContent: {
    padding: 30,
    '& .MuiInputBase-input,& .MuiTypography-body1, & p': {
      fontFamily: 'made_tommyregular, sans-serif',
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
      width: (props) => (props.variant === 'default' ? '50%' : '100%'),
    },
    [theme.breakpoints.up('xl')]: {
      padding: 50,
    },
  },
  titleRoot: {
    color: '#19519D',
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '36px',
    marginBottom: 0,
    fontFamily: 'Poppins',
  },
  subTitleRoot: {
    color: '#000000',
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '21px',
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  labelRoot: {
    color: '#000000',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
  },
  submitButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#929292',
    color: '#fff',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '21px',
    fontFamily: 'Poppins',
    textTransform: 'inherit',
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.common.dark, 0.12),
    },
  },
  alertRoot: {
    marginBottom: 10,
  },
  passImage: {
    width: 140,
    maxWidth: 140,
  },
}))

const ForgotPassword = ({
  variant = 'default',
  wrapperVariant = 'default',
}) => {
  const dispatch = useDispatch()
  const classes = useStyles({ variant })
  const forgetMessage = useSelector((state) => state.ForgetPasswordMessageGet)

  const changePasswordMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHANGE_PASSWORD,
    mutationFn: changePassword,
    onSuccess: (data) => {
      GMTCycles.afterChangePassword()
      dispatch(forgetPasswordMessage(data.message))
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
      dispatch(forgetPasswordMessage(error.response.data.message))
    },
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      if (changePasswordMutation.isLoading) return
      changePasswordMutation.mutate(values)
    },
  })

  useEffect(() => {
    const rememberObj = localStorage.getItem('rememberObj')
    if (rememberObj) {
      const { email } = JSON.parse(rememberObj)
      formik.setFieldValue('email', email)
    }
  }, [])

  return (
    <AuthWrapper variant={wrapperVariant}>
      <When condition={variant === 'default'}>
        <Box className={classes.authThumb}>
          <CmtImage src={'/images/auth/forgot-img.png'} />
        </Box>
      </When>
      <Box className={classes.authContent}>
        <Box mb={7}>
          <CmtImage
            src={'/images/password-image.jpg'}
            className={classes.passImage}
          />
        </Box>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          Reset your password
        </Typography>
        <Typography
          component="div"
          variant="h4"
          className={classes.subTitleRoot}
        >
          Please enter your email and password to reset your password.
        </Typography>
        <When
          condition={
            changePasswordMutation.isError || changePasswordMutation.isSuccess
          }
        >
          <Alert
            variant="outlined"
            severity={changePasswordMutation.isSuccess ? 'success' : 'error'}
            className={classes.alertRoot}
          >
            {forgetMessage}
          </Alert>
        </When>
        <form onSubmit={formik.handleSubmit}>
          <Box mb={2}>
            <label className={classes.labelRoot}>Email</label>
            <TextField
              inputProps={{
                placeholder: 'john.doe@pollthepeople.com',
                style: {
                  color: 'grey',
                  fontWeight: 'regular',
                  padding: '11px 20px',
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  backgroundColor: 'white',
                },
              }}
              id="email"
              // label={<IntlMessages id="appModule.email"/>}
              fullWidth
              error={formik.touched.email && !isEmpty(formik.errors.email)}
              helperText={formik.errors.email ? formik.errors.email : ''}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
              {...formik.getFieldProps('email')}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
              disabled={changePasswordMutation.isLoading}
            >
              <When condition={changePasswordMutation.isLoading}>
                <Loader size={25} color={'white'} />
              </When>
              <IntlMessages id="appModule.resetPassword" />
            </Button>
          </Box>
          {/* <Box>
                        <Typography>
                            Don't remember your email?
                            <Box component="span" ml={2}>
                                <Link href="#">
                                    <IntlMessages id="appModule.contactSupport"/>
                                </Link>
                            </Box>
                        </Typography>
                    </Box> */}
        </form>
        <ContentLoader />
      </Box>
    </AuthWrapper>
  )
}

export default ForgotPassword
