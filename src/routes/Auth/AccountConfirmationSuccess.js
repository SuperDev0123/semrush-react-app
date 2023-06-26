import * as React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@material-ui/core'

import { MetaProvider } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import CmtImage from '@src/@coremat/CmtImage'
import AuthWrapper from '@src/@jumbo/components/Common/authComponents/AuthWrapper'
import { getAttemptURL } from '../../common/functions/tools'

import { useStyles } from './styles'

const AccountConfirmationFail = () => {
  const classes = useStyles()
  const attemptURL = getAttemptURL()

  return (
    <MetaProvider title="Account confirmation">
      <AuthWrapper variant="bgColor">
        <Box className={classes.topBar}>
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
              src={'/images/confirmation-image.jpg'}
              className={classes.succImg}
            />
          </Box>
          <Typography variant="h2" align="center" className={classes.titleRoot}>
            Email Confirmed
          </Typography>
          <Typography
            variant="h5"
            align="center"
            className={classes.subTitleRoot}
            style={{ padding: 25, paddingTop: 0, paddingBottom: 0 }}
          >
            Thank you, your email has been verified. Your account is now active.
            Please click on the button below to login to your account.
          </Typography>
          <Box sx={{ marginTop: 15 }}>
            <Link to={browserRoutes.SIGN_IN(attemptURL)}>
              <Button
                variant="contained"
                color="primary"
                className={classes.loginButton}
              >
                Login
              </Button>
            </Link>
            <Typography
              variant="body1"
              align="center"
              style={{ marginTop: 25 }}
              className={classes.subTitleRoot}
            >
              <strong style={{ color: '#535353' }}>
                Thank you for choosing Poll The People.
              </strong>
            </Typography>
          </Box>
        </Box>
      </AuthWrapper>
    </MetaProvider>
  )
}

export default AccountConfirmationFail
