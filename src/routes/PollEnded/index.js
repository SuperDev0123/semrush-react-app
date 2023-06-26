import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button } from '@material-ui/core'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { MetaProvider } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import PollEndedImage from '@src/common/assets/images/poll_ended.png'
import usePollEndedStyles from './common/style'

const PollEnded = () => {
  const classes = usePollEndedStyles()
  const history = useHistory()

  const createTestAction = () => history.push(browserRoutes.SIGN_IN())

  return (
    <MetaProvider title="Poll Ended">
      <PageContainer>
        <GridContainer>
          <Box className={classes.containerBox}>
            <Box className={classes.subContainer}>
              <Box className={classes.imageContainer}>
                <img
                  src={PollEndedImage}
                  alt="Poll Ended"
                  className={classes.image}
                />
              </Box>
              <Box className={classes.headerTextContainer}>
                <Typography className={classes.headerText}>
                  Oops! I'm sorry, this test has
                  <br /> been closed.
                </Typography>
              </Box>
              <Box className={classes.textDescriptionContainer}>
                <Typography className={classes.textDescription} component="p">
                  Hi, thanks for visiting this test. Unfortunately we have
                  already
                  <br /> closed the test because it has reached its limit.
                </Typography>
              </Box>
              <Box className={classes.actionTextContainer}>
                <Typography className={classes.actionText}>
                  Want to create a test for yourself?
                </Typography>
              </Box>
              <Box className={classes.actionContainer}>
                <Button
                  className={classes.actionButton}
                  onClick={createTestAction}
                >
                  Create a Test
                </Button>
              </Box>
            </Box>
          </Box>
        </GridContainer>
      </PageContainer>
    </MetaProvider>
  )
}

export default PollEnded
