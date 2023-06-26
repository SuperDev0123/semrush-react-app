import React from 'react'
import { Box, Button, InputLabel, Typography } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { Formik } from 'formik'
import clsx from 'clsx'
import { merge, pick } from 'lodash'
import { useMutation, useQueryClient } from 'react-query'

import { Select, Input, CheckBoxGroup } from '../ui/components'
import { userRole, userContactPreferences } from '@src/common/data'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import { userDetailsSchema } from '@src/common/validator'
import useAuthUserQuery from '@src/common/hooks/useAuthUserQuery/useAuthUserQuery'
import { userProfileImage, updateUserDetails } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { Toaster, Loader, When } from '@src/common/components'

import useStyle from '../styles/ProfileDetails.style'

const ProfileDetails = () => {
  const classes = useStyle()
  const token = localStorage.getItem('token')
  const queryClient = useQueryClient()
  const userDetails = useAuthUserQuery(true, token)
  const userProfileImageMutation = useMutation({
    mutationFn: userProfileImage,
    mutationKey: queryKeys.USER_PROFILE_IMAGE,
    onSuccess: (data) => {
      Toaster.success(data.message)
      queryClient.invalidateQueries(queryKeys.AUTHENTICATION_FETCH_PROFILE)
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText
      )
    },
  })

  const userProfileMutation = useMutation({
    mutationFn: updateUserDetails,
    mutationKey: queryKeys.USER_PROFILE_DETAILS,
    onSuccess: (data) => {
      Toaster.success(data.message)
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
        <Formik
          validationSchema={userDetailsSchema}
          initialValues={
            merge(pick(userDetails.data, ['name', 'email']), {
              user_role: userDetails.data.is_admin ? 'admin' : 'user',
              user_avatar: userDetails.data.profile_image_url,
            }) || {
              name: '',
              email: '',
              user_role: '',
              user_avatar: '',
              send_me_emails: false,
              send_me_occasional: false,
              send_me_tips: false,
              user_img: '',
            }
          }
          onSubmit={(values) => {
            userProfileMutation.mutate({ name: values.name })
          }}
        >
          {({ values, errors, setFieldValue, handleSubmit }) => (
            <>
              <Typography className={classes.title}>
                Personal Details
              </Typography>
              <Box>
                <Input
                  name="name"
                  label="Name"
                  placeholder="Enter your Name"
                  errors={errors}
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="Enter your Email Address"
                  errors={errors}
                  disabled
                />
                <When condition={userDetails.data.is_admin}>
                  <Select
                    value={values.user_role}
                    label="Your Role"
                    name="user_role"
                    options={userRole}
                    handleChange={(e) => {
                      setFieldValue('user_role', e.target.value)
                    }}
                    optionValueField="value"
                    optionLabelField="name"
                    errors={errors}
                  />
                </When>
                <InputLabel className={classes.controlLabel}>Avatar</InputLabel>
                <Box className={classes.avatarSection}>
                  <CmtAvatar
                    src={
                      userDetails.data.profile_image_url
                        ? `${process.env.MIX_APP_URL}${userDetails.data.profile_image_url}`
                        : values.user_img
                    }
                    // alt={values.name || "user profile"}
                    className=""
                    color="grey"
                    size={70}
                  />
                  <Box className={classes.uploadSection}>
                    <input
                      name="user_avatar"
                      accept="image/*"
                      className={classes.uploadInput}
                      id="contained-button-file"
                      type="file"
                      onChange={(e) => {
                        const userImage = URL.createObjectURL(e.target.files[0])
                        userProfileImageMutation.mutate(e.target.files)
                        // setFieldValue('user_avatar', e.target.files)
                        setFieldValue('user_img', userImage)
                      }}
                    />
                    <Box className={classes.buttonSection}>
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="secondary"
                          component="span"
                          className={classes.uploadButton}
                        >
                          Choose file
                        </Button>
                      </label>
                      <Typography
                        className={clsx({
                          [classes.maxSizeText]: true,
                          [classes.errorText]: errors && errors.user_avatar,
                        })}
                      >
                        The maximum size is 2MB
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <InputLabel className={classes.controlLabel}></InputLabel>
                {/* <CheckBoxGroup
                  label="Contact Preferences"
                  data={userContactPreferences}
                  value={values}
                  onChange={(target, value) => {
                    setFieldValue(target, value)
                  }}
                /> */}
                <Button
                  className={classes.primaryButton}
                  onClick={handleSubmit}
                >
                  <When condition={userProfileMutation.isLoading}>
                    <Loader color="white" />
                  </When>
                  Save Personal Details
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Paper>
    </Box>
  )
}
export default ProfileDetails
