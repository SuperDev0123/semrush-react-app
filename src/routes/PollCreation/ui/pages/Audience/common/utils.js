import { criteriaTypes } from './constants'

export const deliveryTime = (numResponses, numCriteria) => {
  let result = Math.ceil(numResponses / 100) * 30
  if (numCriteria > 0) {
    result *= numCriteria * 5
  }
  return result
}

export const priceFraction = (price) => price.toFixed(2)

export const getCriteriaCategory = (typeID) => {
  switch (typeID) {
    case criteriaTypes.SYSTEM:
      return 'System Qualifications'
    case criteriaTypes.PREMIUM:
      return 'Premium Qualifications'
    default:
      return 'Other'
  }
}

export const isNullOrUndefined = (value) =>
  value === null || value === undefined
