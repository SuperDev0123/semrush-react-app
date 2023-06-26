const accessControlState = {
  createEmpty: () => ({
    subscribePlanInformation: {
      isUserSubscribed: false,
      hasNumPollsRemaining: false,
    },
    costInformation: {
      costPerAdditionalCriteria: 0,
      costPerResponse: 0,
    },
    responseInformation: {},
  }),
}

export default accessControlState
