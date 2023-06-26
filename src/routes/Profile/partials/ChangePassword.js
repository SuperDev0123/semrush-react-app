import React, { useState } from 'react'
import { Box, Button, Paper, Typography } from '@material-ui/core'
import { useMutation } from 'react-query'

import useStyle from '../styles/ChangePassword.style'
import { Input } from '../ui/components'
import { Formik } from 'formik'
import { ChangePasswordSchema } from '@src/common/validator'
import queryKeys from '@src/common/queryKeys'
import { updateUserDetails } from '@src/common/api'
import { useAuthUserQuery } from '@src/common/hooks'
import { Toaster, Loader, When } from '@src/common/components'

const ChangePassword = () => {
  const classes = useStyle()
  const user = useAuthUserQuery(true, localStorage.getItem('token'))
  const [resetForm, setResetFrom] = useState(null)
  const userProfileMutation = useMutation({
    mutationFn: updateUserDetails,
    mutationKey: queryKeys.USER_PROFILE_DETAILS,
    onSuccess: () => {
      Toaster.success('User password update successfully')
      resetForm && resetForm()
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText
      )
    },
  })

  return (
    <Box className={classes.container}>
      <Paper className={classes.root}>
        <Typography className={classes.title}>Change your password</Typography>
        <Formik
          validationSchema={ChangePasswordSchema}
          initialValues={{
            old_password: '',
            new_password: '',
            confirm_password: '',
          }}
          onSubmit={(values, { resetForm }) => {
            userProfileMutation.mutate({ ...values, name: user.data.name })
            setResetFrom(resetForm)
          }}
        >
          {({ errors, handleSubmit }) => (
            <Box>
              <Input
                name="old_password"
                label="Current Password"
                value=""
                type="password"
                placeholder="Enter your Current Password"
                errors={errors}
              />
              <Input
                name="new_password"
                label="New Password"
                value=""
                type="password"
                placeholder="Enter your New Password"
                errors={errors}
              />
              <Input
                name="confirm_password"
                label="Confirm Password"
                value=""
                type="password"
                placeholder="Enter your Confirm Password"
                errors={errors}
              />
              <Button className={classes.primaryButton} onClick={handleSubmit}>
                <When condition={userProfileMutation.isLoading}>
                  <Loader />
                </When>
                Change Password
              </Button>
            </Box>
          )}
        </Formik>
      </Paper>
    </Box>
  )
}

export default ChangePassword
