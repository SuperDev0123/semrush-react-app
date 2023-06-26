import React, { useState, useEffect, useContext, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useMutation } from 'react-query'
import { Button, Grid, Box, Typography } from '@material-ui/core'
import { fetchError, fetchSuccess } from '@src/common/redux/actions'
import { getPlanList } from '@src/common/api'
import queryKeys from '@src/common/queryKeys'
import { When, LoadingIndicator, Loader, Toaster } from '@src/common/components'
import Plan from './Plan'
import useStyles from '../style/Plans.style'
import { AccessControlContext } from '@src/common/context/AccessControl'

const Plans = (props) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { setIsLoading } = useContext(AccessControlContext)
  const [planList, setPlansList] = useState([])
  const [isPlanSelected, setIsPlanSelected] = useState(null)
  let isMounted = true

  const getPlanListMutation = useMutation({
    mutationKey: queryKeys.AUTHENTICATION_GET_PLAN_LIST,
    mutationFn: getPlanList,
    onSuccess: (data) => {
      dispatch(fetchSuccess())
      isMounted && setPlansList(data)
      setIsLoading(false)
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

  const subscribePlan = (index) => {
    props.onSubscribePlan(planList[index])
  }

  const isAnyRequestLoading = useMemo(() => {
    return getPlanListMutation.isLoading
  }, [getPlanListMutation.isLoading])

  useEffect(() => {
    setIsLoading(true)
    setIsPlanSelected(null)
    getPlanListMutation.mutate(null)
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Grid container className={classes.centerGrid}>
      <LoadingIndicator isLoading={isAnyRequestLoading} />
      <When condition={planList.length}>
        {planList.map((plan, index) => (
          <Grid item xs={12} sm={7} md={4} key={index}>
            <Box className={classes.margins}>
              <Plan
                plan={plan}
                isRecommended={plan.recommended === true}
                isCurrentPlan={props.currentPlan.name === plan.name}
              >
                <When condition={props.currentPlan.name !== plan.name}>
                  <Button
                    className={classes.subscriptionButton}
                    variant="contained"
                    disableElevation
                    color="primary"
                    onClick={() => {
                      subscribePlan(index)
                      setIsPlanSelected(index)
                    }}
                  >
                    <When condition={props.loading && index === isPlanSelected}>
                      <Loader size={25} color="white" />
                    </When>{' '}
                    Subscribe
                  </Button>
                </When>
                <When condition={props.currentPlan.name === plan.name}>
                  <Typography className={classes.currentPlanText}>
                    Your Current Plan
                  </Typography>
                </When>
              </Plan>
            </Box>
          </Grid>
        ))}
      </When>
    </Grid>
  )
}

export default Plans
