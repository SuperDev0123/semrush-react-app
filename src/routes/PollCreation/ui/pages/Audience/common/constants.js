export const responsesSliderMarks = (maxRespondentsPerPoll) => [
  {
    value: 0,
    label: '0',
  },
  {
    value: maxRespondentsPerPoll,
    label: maxRespondentsPerPoll,
  },
]

export const criteriaTypes = {
  SYSTEM: 1,
  PREMIUM: 2,
}

export const criteriaFormFields = {
  TRUE_FALSE: 'trueFalse',
  COMPARISON: 'comparison',
  COUNTRY: 'country',
}

export const ALLOWED_MAX_RESPONSES = 128
export const ALLOWED_MIN_RESPONSES = 1
