import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { MetaProvider } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import PollEndedImage from '@src/common/assets/images/thank_you_survey.png'
import useThankYouStyles from './common/style'

const PollEnded = () => {
  const classes = useThankYouStyles()
  const history = useHistory()

  const signUpNow = () => history.push(browserRoutes.SIGN_UP())

  return (
    <MetaProvider title="Thank You">
      <PageContainer>
        <GridContainer>
          <Box className={classes.containerBox}>
            <Box className={classes.textContainer}>
              <Box className={classes.headerTextContainer}>
                <Typography className={classes.headerText}>
                  Thanks for taking this survey!
                </Typography>
              </Box>
              <Box className={classes.textDescriptionContainer}>
                <Typography className={classes.textDescription} component="p">
                  Want to learn more? Check out our user testing
                  <br />
                  software to get actionable insights on your brand
                  <br />
                  concepts.
                </Typography>
              </Box>
              <Box className={classes.actionTextContainer}>
                <Typography className={classes.actionText}>
                  What will you get?
                </Typography>
              </Box>
              <Box className={classes.benefitsListContainer}>
                <List className={classes.benefitsList}>
                  <ListItem className={classes.benefitListItem}>
                    <ListItemText className={classes.benefitListItemText}>
                      Full access to our template gallery
                    </ListItemText>
                  </ListItem>
                  <ListItem className={classes.benefitListItem}>
                    <ListItemText className={classes.benefitListItemText}>
                      Qualitative and quantitative feedback within
                      <br />
                      minutes
                    </ListItemText>
                  </ListItem>
                  <ListItem className={classes.benefitListItem}>
                    <ListItemText className={classes.benefitListItemText}>
                      Enterprise anti-cheating software
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.actionContainer}>
                <Button className={classes.actionButton} onClick={signUpNow}>
                  Sign up now
                </Button>
              </Box>
            </Box>
            <Box className={classes.imageContainer}>
              <img
                src={PollEndedImage}
                alt="Poll Ended"
                className={classes.image}
              />
            </Box>
          </Box>
        </GridContainer>
      </PageContainer>
    </MetaProvider>
  )
}

export default PollEnded
