import React, { useContext, useState, useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LoadingContext } from 'react-router-loading'
import { useHistory } from 'react-router-dom'
import { useMutation, useQueryClient } from 'react-query'
import { isEmpty } from 'lodash'
import {
  Box,
  Typography,
  TextField,
  Grid,
  Checkbox,
  FormGroup,
  FormControl,
  FormControlLabel,
  Button,
} from '@material-ui/core'

import { InfoOutlined } from '@material-ui/icons'

import { WithLoader, When, Toaster } from '@src/common/components'
import { AccessControlContext } from '@src/common/context/AccessControl'
import { categoriesSkeletonConfig } from '@src/routes/Guest/ui/pages/Templates/common/constants'
import Subscription from '@src/routes/Subscription'
import { browserRoutes } from '@src/common/browserRoutes'
import { setAttemptURL } from '@src/common/functions/tools'
import { getUserBilling, suggestionCompletion } from '@src/common/api'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { StorageTTL } from '@src/routes/PollCreation/common/services'

import { OutOfSearchesModal, LaunchTest, SelectedBox } from '../../components'
import useSearchBoxListStyles from './SearchBoxList.styles'

const UNAUTHENTICATED_USER_LIMIT = 3

const SearchBoxList = () => {
  const loadingContext = useContext(LoadingContext)
  const { setAccessControl } = useContext(AccessControlContext)
  const { authUser } = useSelector(({ auth }) => auth)
  const isAuthenticated = !isEmpty(authUser)
  const classes = useSearchBoxListStyles()
  const queryClient = useQueryClient()
  const history = useHistory()
  const dispatch = useDispatch()

  const [selectedCount, setSelectedCount] = useState(0)
  const [currentCounts, setCurrentCounts] = useState(0)
  const [isUserSubscribed, setIsUserSubscribed] = useState(false)
  const [isSearchError, setSearchError] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalClosed, setIsModalClosed] = useState(false)
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [hasSentInitalRequest, setHasSentInitalRequest] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [searchHeadline, setSearchHeadline] = useState('')
  const [searchHeadLineRequest, setSearchHeadlineRequest] = useState('')

  const [headlines, setHeadlines] = useState([])
  const [headlinesData, setHeadlinesData] = useState({
    currentLimit: UNAUTHENTICATED_USER_LIMIT,
    currentPackage: 'free',
    exhaustedLimit: 2,
    currentCounts: 0,
  })

  const getSuggestedListMutation = useMutation(suggestionCompletion, {
    onSuccess: ({ choices, ...responseData }) => {
      loadingContext.done()
      if (!isAuthenticated) {
        StorageTTL.set(
          'currentCount',
          currentCounts + 1,
          new Date().setHours(24, 0, 0, 0)
        )
        setCurrentCounts(currentCounts + 1)
      } else {
        setCurrentCounts(responseData.currentCounts)
      }

      setSelectedCount(0)
      setHeadlines(formatHeadlines(choices[0].text.split(/\r?\n/g)))
      setHeadlinesData(responseData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('create')
    },
  })

  const getUserBillingMutation = useMutation(getUserBilling, {
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      setSubscription(data.subscription)
      setIsUserSubscribed(data.is_user_subscribed)
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

  const isLimited = useMemo(() => {
    return headlinesData.currentLimit !== -1
  }, [headlinesData])

  const getMaxLimit = useMemo(() => {
    return isLimited ? headlinesData.currentLimit : 0
  }, [isLimited, headlinesData])

  const getRemainingSearchTries = useMemo(() => {
    return Math.max(getMaxLimit - currentCounts + 1, 0)
  }, [getMaxLimit, currentCounts])

  const isOverLimit = useMemo(() => {
    return isLimited && !getRemainingSearchTries
  }, [isLimited, getRemainingSearchTries])

  const formatHeadlines = (data) => {
    let newData = []

    data.forEach((element, index) => {
      if (element.trim().length) {
        newData = [
          ...newData,
          {
            id: index,
            text: element,
            modifiedText: element,
            checked: false,
          },
        ]
      }
    })

    if (newData.length > 1) {
      newData[0].checked = true
      setSelectedCount(1)
    }

    if (newData.length > 2) {
      newData[1].checked = true
      setSelectedCount(2)
    }

    return newData
  }

  const setSearchHeadlineOnChange = (event) => {
    event.target.value.trim() && setSearchError(false)
    setSearchHeadline(event.target.value)
  }

  const getPosition = (string, subString, index) => {
    return string.split(subString, index).join(subString).length
  }

  const onCheckChange = (event, passedIndex) => {
    const newHeadlines = headlines.map((headline) => {
      if (headline.id === passedIndex) {
        headline.checked = event.target.checked
        if (!event.target.checked) {
          headline.modifiedText = headline.text
        }
      }
      return headline
    })

    setHeadlines(newHeadlines)
    getSelectedCount()
  }

  const onHeadlineChange = (event, passedIndex) => {
    const newHeadlines = headlines.map((headline) => {
      if (headline.id === passedIndex) {
        if (headline.checked) {
          headline.modifiedText = event.target.value
        }
      }
      return headline
    })

    setHeadlines(newHeadlines)
  }

  const getSelectedCount = () => {
    const count = headlines.filter((headline) => headline.checked).length || 0
    setSelectedCount(count)
  }

  const sendSearchHeadlinesRequest = () => {
    if (searchHeadline.trim().length) {
      setSearchHeadline(searchHeadline.trim())
      setSearchHeadlineRequest(searchHeadline.trim())
      history.push(browserRoutes.GUEST_SUGGESTIONS_SLUG(searchHeadline.trim()))
    } else {
      setSearchError(true)
    }
  }

  const loading = () => {
    if (!getSuggestedListMutation.isLoading && searchHeadLineRequest.length) {
      if (!isAuthenticated && isOverLimit) {
        return
      }

      getSuggestedListMutation.mutate(searchHeadLineRequest)
    }
  }

  const onModalClose = () => {
    setIsModalOpen(false)
    !isAuthenticated && setHeadlines([])
  }

  const onPaymentComplete = () => {
    setIsSubscribing(false)
    setAccessControl((prevState) => ({
      ...prevState,
      subscribePlanInformation: {
        ...prevState.subscribePlanInformation,
        isUserSubscribed: true,
      },
    }))
    loading()
  }

  const redirectToSign = () => {
    setAttemptURL()
    history.push(browserRoutes.SIGN_UP())
  }

  useEffect(() => {
    if (!isAuthenticated && !isModalClosed) {
      setIsModalClosed(true)
      setIsModalOpen(true)
      //   duplicateHeadLines()
    }
  }, [isAuthenticated, headlines])

  useEffect(() => {
    const slugText = history.location.pathname
      .substring(getPosition(history.location.pathname, '/', 2) + 1)
      .replace(/ /g, '-')
      .replaceAll('-', ' ')

    setSearchHeadline(slugText)
    setSearchHeadlineRequest(slugText)
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      const storedLimit = Number(StorageTTL.get('currentCount')) || 0
      setCurrentCounts(storedLimit)
    } else {
      getUserBillingMutation.mutate()
    }

    if (isAuthenticated && !hasSentInitalRequest) {
      loading()
      setHasSentInitalRequest(true)
    }
  }, [isAuthenticated])

  useEffect(() => {
    loading()
  }, [searchHeadLineRequest])

  return (
    <Box className={classes.searchboxlist}>
      <Box className={classes.body}>
        <WithLoader
          isLoading={getSuggestedListMutation.isLoading}
          variant="rectangle"
          skeletonCount={3}
          skeletonProps={categoriesSkeletonConfig}
        >
          <Grid
            container
            spacing={2}
            className={classes.searchboxlistcontainer}
          >
            <form
              onSubmit={sendSearchHeadlinesRequest}
              style={{ width: 'inherit', display: 'inherit' }}
            >
              <Grid item xs={9} md={10}>
                <TextField
                  className={classes.textbox}
                  onChange={setSearchHeadlineOnChange}
                  value={searchHeadline}
                  id="outlined-basic"
                  variant="outlined"
                  error={isSearchError}
                  helperText={isSearchError ? 'Empty Search keywords' : ''}
                />
              </Grid>
              <Grid
                item
                xs={3}
                md={2}
                className={isSearchError && classes.searchButtonError}
              >
                <Button
                  type="submit"
                  onClick={sendSearchHeadlinesRequest}
                  variant="contained"
                  size="large"
                  className={classes.searchbutton}
                >
                  Search
                </Button>
              </Grid>
            </form>
            <When condition={isLimited}>
              <Grid item xs={12}>
                <Box className={classes.youareusingfreeversioncard}>
                  <InfoOutlined
                    className={classes.youareusingfreeversionicon}
                  />
                  <Typography
                    component="p"
                    className={classes.youareusingfreeversion}
                  >
                    {Math.max(getRemainingSearchTries - 1, 0)} out of{' '}
                    {getMaxLimit} free daily searches available.
                  </Typography>
                  <When condition={isAuthenticated}>
                    <Button
                      className={classes.upgradeButton}
                      onClick={() => setIsSubscribing(true)}
                    >
                      Upgrade
                    </Button>
                    <Typography
                      component="p"
                      className={classes.youareusingfreeversion}
                    >
                      {' '}
                      to get more.
                    </Typography>
                  </When>
                </Box>
              </Grid>
            </When>
            <Grid item xs={12}>
              <LaunchTest
                selectedItemsCount={selectedCount}
                headlines={headlines}
                searchHeadline={searchHeadLineRequest}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="p"
                className={classes.headlinesuggestionfor}
              >
                Headline Suggestions for{' '}
                <strong>"{searchHeadLineRequest}"</strong>
              </Typography>
            </Grid>
            <When condition={headlines}>
              <Grid container spacing={2} className={classes.headlinesList}>
                {headlines.map((headline, index) => (
                  <When condition={headline.text} key={index}>
                    <FormControl
                      component="fieldset"
                      className={`${classes.checkbox} ${
                        !isAuthenticated &&
                        index + 1 > headlinesData.exhaustedLimit &&
                        classes.blurCheckbox
                      } ${headline.checked ? classes.checkBoxChecked : ''}`}
                      disabled={
                        (selectedCount >= 2 && !headline.checked) ||
                        (index + 1 > headlinesData.exhaustedLimit &&
                          !isAuthenticated)
                      }
                    >
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={headline.checked}
                              classes={{
                                root: classes.formControlLabelUnchecked,
                                checked: classes.formControlLabelChecked,
                              }}
                            />
                          }
                          label={headline.checked ? '' : headline.text}
                          labelPlacement="end"
                          value={headline.checked}
                          onChange={(event) => onCheckChange(event, index)}
                          className={classes.formControlLabel}
                        />
                        <When condition={headline.checked}>
                          <TextField
                            className={classes.headlinesTextBox}
                            onChange={(event) => onHeadlineChange(event, index)}
                            value={headline.modifiedText}
                          />
                        </When>
                      </FormGroup>
                    </FormControl>
                  </When>
                ))}
              </Grid>
            </When>
            <When condition={!isAuthenticated && headlines.length}>
              <Box className={classes.moreHeadlineBox}>
                <Box className={classes.mimicHeadlineBox}>
                  {[3, 4].map((value) => (
                    <FormControl
                      component="fieldset"
                      key={value}
                      className={`${classes.checkbox} ${classes.blurCheckbox}`}
                      disabled={true}
                    >
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              classes={{
                                root: classes.formControlLabelUnchecked,
                                checked: classes.formControlLabelChecked,
                              }}
                            />
                          }
                          label={'This is mimic headlines.'}
                          labelPlacement="end"
                          value={null}
                          className={classes.formControlLabel}
                        />
                      </FormGroup>
                    </FormControl>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.upgradeAndSignupButton}
                  onClick={() => {
                    isAuthenticated ? setIsSubscribing(true) : redirectToSign()
                  }}
                >
                  Sign up to see more headlines
                </Button>
              </Box>
            </When>
            <When condition={!headlines.length}>
              <Grid container spacing={2} className={classes.noResultBox}>
                <Grid item xs={12}>
                  <Typography
                    component="p"
                    className={classes.noResultContentTitle}
                  >
                    Oops, no data to display
                  </Typography>
                  <Typography
                    component="p"
                    className={classes.noResultContentSubtitle}
                  >
                    Your search returned to no results. Please try to type other
                    keyword.
                  </Typography>
                </Grid>
              </Grid>
            </When>
          </Grid>
          <When condition={!isAuthenticated && isModalOpen && isOverLimit}>
            <OutOfSearchesModal onClose={onModalClose} open={isModalOpen} />
          </When>
          <When
            condition={
              isAuthenticated &&
              !getUserBillingMutation.isLoading &&
              !isUserSubscribed &&
              isSubscribing
            }
          >
            <Subscription
              job="subscribe"
              title="Subscribe the plan"
              paymentComplete={onPaymentComplete}
              paymentFail={() => setIsSubscribing(false)}
            />
          </When>
          <When
            condition={
              isAuthenticated &&
              !getUserBillingMutation.isLoading &&
              isUserSubscribed &&
              isSubscribing
            }
          >
            <Subscription
              job="change"
              title="Change the plan"
              currentPlan={subscription.plan}
              paymentComplete={onPaymentComplete}
              paymentFail={() => setIsSubscribing(false)}
            />
          </When>
          <When condition={headlines.length}>
            <SelectedBox
              selectedItemsCount={selectedCount}
              headlines={headlines}
              searchHeadline={searchHeadLineRequest}
            />
          </When>
        </WithLoader>
      </Box>
    </Box>
  )
}

export default SearchBoxList
