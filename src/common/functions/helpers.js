export const prepareAccessControlObj = (prevState, data) => {
  const {
    isUserSubscribed,
    hasNumPollsRemaining,
    costPerAdditionalCriteria,
    costPerResponse,
    recommendedNumRespondents,
    maxRespondentsPerPoll,
    maxPollsPerMonth,
    numPollsRemaining,
  } = data

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
}
