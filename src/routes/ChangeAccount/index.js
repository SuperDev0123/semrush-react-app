import React from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import classnames from 'classnames'
import { useHistory } from 'react-router'
import { Button, TextField, Box, alpha } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import {
  validate,
  isEmpty,
} from '@src/@jumbo/components/Common/authComponents/validate'
import IntlMessages from '@src/@jumbo/utils/IntlMessages'
import { MetaProvider, Alert, When, Toaster } from '@src/common/components'
import { changeAccount, logout } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import {
  clearAudience,
  clearPoll,
  unsubscribe,
} from '@src/common/redux/actions/Poll'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import {
  setAuthorizationToken,
  setUserDataAfterAuthorize,
} from '@src/common/functions/tools'
import { useAuthUserQuery } from '../../common/hooks'

const useStyles = makeStyles((theme) => ({
  textFieldRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.common.dark, 0.12),
    },
  },
}))

const ChangeAccount = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const [changeAccountToken, setChangedAccountToken] = React.useState(null)

  const userDetail = JSON.parse(localStorage.getItem('userDetail'))
  const isUserAdmin = !!userDetail.is_admin

  useAuthUserQuery({
    enabled: !!changeAccountToken,
    token: changeAccountToken,
  })

  const logoutMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_LOGOUT,
    mutationFn: logout,
    onSuccess: (oldUserData) => {
      if (oldUserData) {
        dispatch(fetchSuccess())
        history.push('/')
        setAuthorizationToken(oldUserData.access_token)
      }
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

  const changeAccountMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_CHANGE_ACCOUNT,
    mutationFn: changeAccount,
    onSuccess: (newUserData) => {
      const oldUserToken = localStorage.getItem('token')
      setUserDataAfterAuthorize(newUserData)

      localStorage.removeItem('pollItems')
      dispatch(clearPoll())
      dispatch(clearAudience())
      dispatch(unsubscribe())
      setChangedAccountToken(newUserData.access_token)
      setAuthorizationToken(oldUserToken)

      logoutMutation.mutate(null)
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

  if (!isUserAdmin) {
    history.push('/')
  }

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: (values) => validate(values, 'changeAccount'),
    onSubmit: (values) => {
      changeAccountMutation.mutate(values)
    },
  })

  return (
    <MetaProvider title="Change Account">
      <PageContainer>
        <h1>Change account</h1>
        <form onSubmit={formik.handleSubmit}>
          <When condition={changeAccountMutation.isError}>
            <Box mb={2}>
              <Alert severity="error">
                {changeAccountMutation.error.response.data.message}
              </Alert>
            </Box>
          </When>
          <Box mb={2}>
            <TextField
              id="email"
              label={<IntlMessages id="appModule.email" />}
              fullWidth
              error={formik.touched.email && !isEmpty(formik.errors.email)}
              helperText={(formik.touched.email && formik.errors.email) || ''}
              margin="normal"
              variant="outlined"
              className={classnames(classes.textFieldRoot, 'inspectletIgnore')}
              {...formik.getFieldProps('email')}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb={5}
          >
            <Button type="submit" variant="contained" color="primary">
              Impersonate
            </Button>
          </Box>
        </form>
      </PageContainer>
    </MetaProvider>
  )
}

export default ChangeAccount
