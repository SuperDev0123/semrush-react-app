import * as React from 'react'
import { useParams } from 'react-router-dom'

import { AccessControlContext } from '@src/common/context/AccessControl'
import { stepChangeListener } from '../../ui/pages/Design/common/utils'
import { stepOperations } from '../../ui/pages/Design/common/constants'
import { pollCreationSteps } from '../constants'
import { Storage } from '../services'

const usePollCreation = () => {
  const { templateID } = useParams()
  const {
    accessControl: { responseInformation },
  } = React.useContext(AccessControlContext)

  const designStorage = Storage.get(
    `${templateID}-${pollCreationSteps.DESIGN}`,
    true
  )

  const [state, setState] = React.useState({
    activeStep: pollCreationSteps.DESIGN,
    isCriteriaBlockOpen: false,
    pollType: null,
    [pollCreationSteps.DESIGN]: {
      isDone: false,
      ...designStorage,
    },
    [pollCreationSteps.AUDIENCE]: {
      pollResponses: responseInformation.recommendedNumRespondents,
      selectedCriteriaList: [],
      isDone: true,
    },
    [pollCreationSteps.PAYMENT]: {
      isDone: true,
    },
  })

  const stepChangeHandler = (stepID) => {
    setState((prevState) => ({ ...prevState, activeStep: stepID }))
  }

  const setPollType = (type) => {
    setState((prevState) => ({ ...prevState, pollType: type }))
  }

  const setActiveStep = (stepID, forceChange = false) => {
    if (forceChange) {
      stepChangeHandler(stepID)
      return
    }

    const stepOperation = stepChangeListener(state.activeStep, stepID)

    switch (stepOperation) {
      case stepOperations.SAME:
        return
      case stepOperations.NEXT:
        if (!state[state.activeStep].isDone) return
        stepChangeHandler(stepID)
        return
      case stepOperations.PREV:
        stepChangeHandler(stepID)

      default:
    }
  }

  const setDesignStepFlow = (stepData = {}) => {
    setState((prevState) => ({
      ...prevState,
      [pollCreationSteps.DESIGN]: {
        ...prevState[pollCreationSteps.DESIGN],
        ...stepData,
      },
    }))
  }

  const setAudienceStepFlow = (stepData = {}) => {
    setState((prevState) => ({
      ...prevState,
      [pollCreationSteps.AUDIENCE]: {
        ...prevState[pollCreationSteps.AUDIENCE],
        ...stepData,
      },
    }))
  }

  const setCriteriaBlockIsOpen = (open) =>
    setState((prevState) => ({ ...prevState, isCriteriaBlockOpen: open }))

  return {
    templateID,
    setState,
    setPollType,
    setActiveStep,
    setDesignStepFlow,
    setAudienceStepFlow,
    setCriteriaBlockIsOpen,
    ...state,
  }
}

export default usePollCreation
