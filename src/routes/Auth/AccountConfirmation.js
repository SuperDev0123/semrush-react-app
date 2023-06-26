import * as React from 'react'
import { useMutation } from 'react-query'
import Swal from 'sweetalert2'
import { Box, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import AuthWrapper from '@src/@jumbo/components/Common/authComponents/AuthWrapper'
import { MetaProvider } from '@src/common/components'
import queryKeys from '@src/common/queryKeys'
import { sendAccountConfirmationLink } from '@src/common/api'
import { browserRoutes } from '@src/common/browserRoutes'
import CmtImage from '@src/@coremat/CmtImage'
import { getAttemptURL } from '../../common/functions/tools'

import { useStyles } from './styles'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

const AccountConfirmation = () => {
  const classes = useStyles()
  const history = useHistory()
  const accessToken = localStorage.getItem('token')
  const attemptURL = getAttemptURL()

  const { mutate, isLoading } = useMutation({
    mutationKey: queryKeys.SEND_ACCOUNT_CONFIRMATION_LINK,
    mutationFn: sendAccountConfirmationLink,
    onSuccess: () => {
      Swal.fire({
        title: 'Email Resent!',
        text: "We have just sent you another email. Just click the link in your email to activate your account. If you don't see it, check your spam folder.",
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        const currentCount = StorageTTL.get('currentCount') ?? 0
        localStorage.clear()
        StorageTTL.set('currentCount', currentCount, (new Date()).setHours(24, 0, 0, 0))
        history.push(browserRoutes.SIGN_IN(attemptURL))
      })
    },
    onError: () => {
      Swal.fire({
        title: 'Error',
        text: 'Error Sending Verification Email.',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then(() => {
        history.push(browserRoutes.SIGN_IN(attemptURL))
      })
    },
  })

  const sendConfirmationLink = () => mutate()

  const submitButtonIsDisabled = isLoading || !accessToken

  return (
    <MetaProvider title="Account confirmation">
      <AuthWrapper variant="bgColor">
        <Box
          className={classes.topBar}
          onClick={() => {
            history.push('/dashboard/home')
          }}
        >
          <CmtImage src={'/images/Top-logo.jpg'} className={classes.topLogo} />
        </Box>
        <Box className={classes.boxWrapper}>
          <Box
            mt={8}
            mb={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CmtImage
              src={'/images/success-img.jpg'}
              className={classes.succImg}
            />
          </Box>
          <Box mb={3}>
            <Typography
              variant="h2"
              align="center"
              className={classes.titleRoot}
            >
              You are almost done!
            </Typography>
          </Box>

          <Typography
            variant="body1"
            align="center"
            className={classes.subTitleRoot}
          >
            We sent you email. Just click the link in your email to activate
            your account. If you don't see it, check your spam folder. Thank
            you.
          </Typography>

          <Box
            mb={8}
            mt={8}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={submitButtonIsDisabled}
              onClick={() => {
                if (submitButtonIsDisabled) return
                history.push(browserRoutes.SIGN_IN(attemptURL))
              }}
              style={{
                cursor: submitButtonIsDisabled ? 'not-allowed' : 'pointer',
                pointerEvents: 'initial',
              }}
              className={classes.loginButton}
            >
              Log in
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              marginTop: 15,
            }}
          >
            <Typography
              variant="body1"
              align="center"
              className={classes.subTitleRoot}
            >
              Still can’t find the email?
              <Button
                color="primary"
                onClick={() => {
                  sendConfirmationLink()
                }}
                style={{
                  cursor: 'pointer',
                  pointerEvents: 'initial',
                }}
                className={classes.resendButton}
              >
                Resend email
              </Button>
              confirmation.
            </Typography>
          </Box>
        </Box>
      </AuthWrapper>
    </MetaProvider>
  )
}

export default AccountConfirmation
