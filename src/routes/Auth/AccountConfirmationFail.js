import * as React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useMutation } from 'react-query'
import { Box, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useStyles } from './styles'

import CmtImage from '@src/@coremat/CmtImage'
import AuthWrapper from '@src/@jumbo/components/Common/authComponents/AuthWrapper'
import { MetaProvider } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import { sendAccountConfirmationLink } from '@src/common/api'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

import Swal from 'sweetalert2'

const AccountConfirmationFail = () => {
  const params = useParams()
  const classes = useStyles()
  const history = useHistory()
  const { token: accessToken } = params
  const { mutate, isLoading } = useMutation({
    mutationKey: queryKeys.SEND_ACCOUNT_CONFIRMATION_LINK,
    mutationFn: sendAccountConfirmationLink,
    onSuccess: () => {
      Swal.fire({
        title: 'Success',
        text: 'Thank you, Verification Email Sent.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        const currentCount = StorageTTL.get('currentCount') ?? 0
        localStorage.clear()
        StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
        history.push('/signin')
      })
    },
    onError: () => {
      Swal.fire({
        title: 'Error',
        text: 'Error Sending Verification Email.',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    },
  })

  const sendConfirmationLink = () => mutate(accessToken)

  const submitButtonIsDisabled = isLoading || !accessToken

  return (
    <MetaProvider title="Account confirmation">
      <AuthWrapper variant="bgColor">
        <Box className={classes.topBar}>
          <CmtImage src={'/images/Top-logo.jpg'} className={classes.topLogo} />
        </Box>
        <Box className={classes.boxWrapper}>
          <Typography variant="h3" align="center">
            Email Verification Failed.
          </Typography>
          <Typography variant="body1" align="center" style={{ marginTop: 15 }}>
            Resend Verification Email ?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 15,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={submitButtonIsDisabled}
              onClick={() => {
                if (submitButtonIsDisabled) return
                sendConfirmationLink()
              }}
              style={{
                cursor: submitButtonIsDisabled ? 'not-allowed' : 'pointer',
                pointerEvents: 'initial',
              }}
            >
              Resend Email
            </Button>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: 15 }}
            >
              <strong>Need help?</strong>{' '}
              <NavLink to="https://pollthepeople.app/contact/">
                <strong>
                  <u>Contact Us</u>
                </strong>
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </AuthWrapper>
    </MetaProvider>
  )
}

export default AccountConfirmationFail
