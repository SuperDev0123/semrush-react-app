import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import pt from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'
import { PollCreationContext } from '@src/routes/PollCreation/common/context/PollCreationContext'
import { createPoll } from '@src/common/redux/actions/Poll'
import { Storage } from '@src/routes/PollCreation/common/services'

import { Design, Audience, Checkout } from '../pages'
import { ATTEMPT_URL } from '@src/common/constants'

const PageFactory = ({ step }) => {
  switch (step) {
    case pollCreationSteps.DESIGN:
      return <Design />
    case pollCreationSteps.AUDIENCE:
      return <Audience />
    case pollCreationSteps.PAYMENT:
      return <Checkout />
    default:
      return null
  }
}

PageFactory.propTypes = {
  step: pt.oneOf([
    pollCreationSteps.DESIGN,
    pollCreationSteps.AUDIENCE,
    pollCreationSteps.PAYMENT,
  ]),
}

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: '74px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '113px',
    },
  },
}))

const Body = () => {
  const history = useHistory()
  const classes = useStyle()
  const dispatch = useDispatch()
  const { activeStep, setDesignStepFlow, setActiveStep } =
    useContext(PollCreationContext)
  const { search } = useLocation()

  useEffect(() => {
    const templateId = Number(history.location.pathname.match(/\d/)[0])
    dispatch(createPoll({ poll_id: null }))

    if (templateId) {
      const pollDataStorage = Storage.get(
        `${templateId}-${pollCreationSteps.DESIGN}`,
        true
      )

      if (pollDataStorage) {
        if (!pollDataStorage.poll_id) {
          setActiveStep(pollCreationSteps.DESIGN, true)
        } else {
          dispatch(createPoll({ poll_id: pollDataStorage.poll_id }))
          setDesignStepFlow(pollDataStorage)
          if (!search) {
            setActiveStep(pollCreationSteps.AUDIENCE, true)
          }
        }
      }
    }
  }, [history.location.pathname])

  useEffect(() => {
    Storage.delete(ATTEMPT_URL)
  }, [])

  return (
    <Box className={classes.root}>
      <PageFactory step={activeStep} />
    </Box>
  )
}

export default Body
