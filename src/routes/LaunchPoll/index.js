import React, { useContext, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import { Box, makeStyles, Button, Typography } from '@material-ui/core'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { MetaProvider } from '@src/common/components'
import SuccessPollCreate from '@src/common/assets/images/create_poll_success.png'
import { AccessControlContext } from '@src/common/context/AccessControl'
import queryKeys from '@src/common/queryKeys'
import { checkClientSubscription } from '@src/common/api'

const useStyles = makeStyles({
  containerBox: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperBox: {
    backgroundColor: '#fff',
    border: '1px solid #E5E5E5',
    borderRadius: '5px',
    textAlign: 'center',
  },
  imageBox: {
    margin: '3rem auto',
  },
  successImage: {
    maxWidth: '50%',
  },
  statusTextBox: {
    margin: '3rem auto',
  },
  statusText: {
    color: '#000',
    fontWeight: '600',
    fontSize: '24px',
    lineHeight: '36px',
  },
  statusParagraphBox: {
    margin: '2rem auto',
    width: '50%',
  },
  statusParagraph: {
    color: '#000',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '21px',
    textAlign: 'center',
  },
  buttonBox: {
    margin: '3rem auto',
  },
  button: {
    backgroundColor: '#016AE9',
    borderRadius: '5px',
    color: '#fff',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '27px',
    textAlign: 'center',
    padding: '.8rem 3rem',
    '&:hover': {
      backgroundColor: '#0364d9',
    },
  },
})

const LaunchPoll = () => {
  const classes = useStyles()
  const history = useHistory()
  const { setAccessControl } = useContext(AccessControlContext)

  const subscription = useQuery({
    queryKey: queryKeys.CHECK_USER_SUBSCRIPTION,
    queryFn: checkClientSubscription,
    onSuccess: (res) => {
      const {
        isUserSubscribed,
        hasNumPollsRemaining,
        costPerAdditionalCriteria,
        costPerResponse,
        recommendedNumRespondents,
        maxRespondentsPerPoll,
        maxPollsPerMonth,
        numPollsRemaining,
      } = res.data
      setAccessControl((prevState) => {
        return {
          ...prevState,
          subscribePlanInformation: {
            ...prevState.subscribePlanInformation,
            isUserSubscribed,
            hasNumPollsRemaining,
          },
          costInformation: {
            ...prevState.costInformation,
            costPerAdditionalCriteria,
            costPerResponse,
          },
          responseInformation: {
            recommendedNumRespondents,
            maxRespondentsPerPoll,
            maxPollsPerMonth,
            numPollsRemaining,
          },
        }
      })
    },
  })

  return (
    <MetaProvider title="Launch Poll">
      <PageContainer>
        <GridContainer>
          <Box className={classes.containerBox}>
            <Box className={classes.wrapperBox}>
              <Box className={classes.imageBox}>
                <img
                  src={SuccessPollCreate}
                  alt="Poll created success"
                  className={classes.successImage}
                />
              </Box>
              <Box className={classes.statusTextBox}>
                <Typography className={classes.statusText} component="h1">
                  Congratulations!
                </Typography>
              </Box>
              <Box className={classes.statusParagraphBox}>
                <Typography className={classes.statusParagraph} component="p">
                  Your poll has been successfully created and launched. You will
                  see updates on the dashboard as respondents answer your poll.
                  Thank you!
                </Typography>
              </Box>
              <Box className={classes.buttonBox}>
                <Button
                  className={classes.button}
                  onClick={() => history.push('/dashboard/home')}
                >
                  Go to Dashboard
                </Button>
              </Box>
            </Box>
          </Box>
        </GridContainer>
      </PageContainer>
    </MetaProvider>
  )
}

export default LaunchPoll
