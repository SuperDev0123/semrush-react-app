import React, { useContext, useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import { Box, Button, Grid, Typography } from '@material-ui/core'

import { MetaProvider, LoadingIndicator, Toaster } from '@src/common/components'

import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import AppContext from '@src/@jumbo/components/contextProvider/AppContextProvider/AppContext'
import Jumbotron from '@src/routes/Components/CustomComponents/Jumbotron'
import PollTemplates from '@src/routes/Components/CustomComponents/PollTemplates'
import { Tips } from '@src/common/data'
import queryKeys from '@src/common/queryKeys'
import { getUserBilling } from '@src/common/api'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { AccessControlContext } from '@src/common/context/AccessControl'
import RCarousel from './ui/partials/carousel'
import { useAuthUserQuery } from '../../../common/hooks'
import { QuickCard } from '../cards'

import useStyles from './Home.style'

const Home = () => {
  const { accessControl } = useContext(AccessControlContext)
  const { setLayout, setHasHeaderStepper, setHasSideBarFilter } =
    useContext(AppContext)
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = useStyles()
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('all_polls')
  const userDetail = useAuthUserQuery(true, localStorage.getItem('token')).data
  const [subscription, setSubscription] = useState(null)
  const [descriptionCount, setDescriptionCount] = useState(0)
  const [isSubscribedLoading, setIsSubscribedLoading] = useState(false)

  const handleDescription = (direction) => {
    if (direction === 'left' && descriptionCount !== 0) {
      setDescriptionCount(descriptionCount - 1)
    }
    if (direction === 'right' && Tips.length - 1 !== descriptionCount) {
      setDescriptionCount(descriptionCount + 1)
    }
  }

  const getUserBillingMutation = useQuery({
    queryKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    queryFn: getUserBilling,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setSubscription(data)
      setIsSubscribedLoading(false)
    },
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 4000,
        }
      )
      dispatch(fetchError(error.response.data.error))
      setIsSubscribedLoading(false)
    },
  })

  useEffect(() => {
    setIsSubscribedLoading(true)
    setLayout('vertical-paged')
    setHasHeaderStepper(false)
    setHasSideBarFilter(false)
    getUserBillingMutation.refetch()
  }, [])

  const handleChange = (event, newValue) => setValue(newValue)
  return (
    <MetaProvider title="Dashboard - Home">
      <PageContainer>
        {/* <SetupModal /> */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Jumbotron
              title={userDetail.name}
              gratings="Welcome"
              src={
                userDetail.profile_image_url
                  ? `${process.env.MIX_APP_URL}${userDetail.profile_image_url}`
                  : ''
              }
              name={userDetail != null ? userDetail.name : ''}
              loading={!userDetail}
            />
            <RCarousel />
            <Grid container spacing={3}>
              <Grid item xs={12} md={12}>
                <Paper className={classes.root}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    className={classes.tabs}
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                  >
                    <Tab
                      label="All Tests"
                      key="tab-all-survey"
                      onClick={() => setCategory('all_polls')}
                    />
                  </Tabs>
                </Paper>
              </Grid>
            </Grid>
            <PollTemplates category={category} />
          </Grid>
          <Grid item xs={12} md={3}>
            <QuickCard
              title="Quick Survey Tips!"
              footer={
                <Box className={classes.quickCardFooter}>
                  <Button
                    className={classes.quickCardButton}
                    size="small"
                    onClick={() => handleDescription('left')}
                  >
                    <ArrowLeft />
                  </Button>
                  <Button
                    className={classes.quickCardButton}
                    size="small"
                    onClick={() => handleDescription('right')}
                  >
                    <ArrowRight />
                  </Button>
                </Box>
              }
              description={
                <>
                  <Typography className={classes.QuickCardTitle}>
                    {Tips[descriptionCount].title}
                  </Typography>
                  {Tips[descriptionCount].description}
                </>
              }
            ></QuickCard>
            <QuickCard
              className={classes.memberCard}
              loading={isSubscribedLoading}
              title={
                subscription &&
                subscription.is_user_subscribed &&
                !subscription.is_cancelling
                  ? subscription.subscription.plan.name + ' Membership'
                  : 'Membership'
              }
              footer={
                <Box
                  className={classes.memberCardButton}
                  onClick={() => {
                    history.push('/billing')
                  }}
                >
                  {subscription ? (
                    <>
                      {subscription.is_user_subscribed &&
                      !subscription.is_cancelling
                        ? subscription.subscription.plan.name !== 'Premium'
                          ? 'Upgrade'
                          : 'View Plan'
                        : subscription.is_cancelling
                        ? 'Resume Subscription'
                        : 'View Plan'}
                    </>
                  ) : (
                    'View Plan'
                  )}
                </Box>
              }
            >
              <Box className={classes.memberContent}>
                {isSubscribedLoading ? (
                  <LoadingIndicator isLoading={isSubscribedLoading} />
                ) : (
                  <>
                    {subscription &&
                    subscription.is_user_subscribed &&
                    !subscription.is_cancelling ? (
                      <>
                        {subscription.subscription.plan.name === 'Premium' ? (
                          <Typography className={classes.memberCardText}>
                            You have unlimited tests per month
                          </Typography>
                        ) : (
                          <>
                            <Typography className={classes.memberCardText}>
                              your test remaining:
                            </Typography>
                            <Typography className={classes.memberCardPollCount}>
                              {
                                accessControl.responseInformation
                                  .numPollsRemaining
                              }{' '}
                              {accessControl.responseInformation
                                .numPollsRemaining >= 1
                                ? 'Tests'
                                : 'Test'}
                            </Typography>
                            <Typography className={classes.memberCardText}>
                              Update your membership to get unlimited number of
                              tests.
                            </Typography>
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {subscription && subscription.is_cancelling ? (
                          <>
                            <Typography className={classes.memberCardText}>
                              You’ve cancelled your subscription. But no
                              worries, you can reactivate your previous
                              subscription plan.
                            </Typography>
                            <Typography className={classes.memberCardText}>
                              Or subscribe to a new plan to get access to all of
                              our features.
                            </Typography>
                          </>
                        ) : (
                          <>
                            <Typography className={classes.memberCardText}>
                              You haven't subscribed to a plan yet.
                            </Typography>
                            <Typography className={classes.memberCardText}>
                              Subscribe to get unlimited tests.
                            </Typography>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </Box>
            </QuickCard>
          </Grid>
        </Grid>
      </PageContainer>
    </MetaProvider>
  )
}

export default Home
