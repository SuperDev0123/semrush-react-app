import React, { useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { useQuery } from 'react-query'
import { makeStyles, Box } from '@material-ui/core'
import PageContainer from '@src/@jumbo/components/PageComponents/layouts/PageContainer'
import GridContainer from '@src/@jumbo/components/GridContainer'
import { When, MetaProvider, Toaster } from '@src/common/components'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'

import { getUserBilling, checkClientSubscription } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { PaymentMethod, Invoices, SubscriptionPlan } from './common/components'
import { AccessControlContext } from '@src/common/context/AccessControl'

const useStyles = makeStyles(() => ({
  margins: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))

const Billing = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { setAccessControl } = useContext(AccessControlContext)
  const [isUserSubscribed, setIsUserSubscribed] = useState(false)
  let isMounted = true

  const getUserBillingMutation = useQuery({
    queryKey: queryKeys.AUTHENTICATION_GET_USER_BILLING,
    queryFn: getUserBilling,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      isMounted && setIsUserSubscribed(data.is_user_subscribed)
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

  const metadataMutation = useQuery({
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
    onError: (error) => {
      Toaster.error(
        error.response.data.message || error.response.statusText,
        {
          duration: 3000,
        }
      )
    },
  })

  const reloadSubscriptionInformation = () => {
    getUserBillingMutation.refetch()
    metadataMutation.refetch()
  }

  useEffect(() => {
    reloadSubscriptionInformation()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Box mt={2}>
      <MetaProvider title="Billing">
        <PageContainer>
          <When condition={getUserBillingMutation.isSuccess}>
            <GridContainer>
              <SubscriptionPlan
                onSubscriptionChange={reloadSubscriptionInformation}
              />
            </GridContainer>
            <When condition={isUserSubscribed}>
              <Box className={classes.margins}></Box>
              <GridContainer>
                <PaymentMethod />
              </GridContainer>
              <Box className={classes.margins}></Box>
              <GridContainer>
                <Invoices />
              </GridContainer>
            </When>
          </When>
        </PageContainer>
      </MetaProvider>
    </Box>
  )
}

export default Billing
