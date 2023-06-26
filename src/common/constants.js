export const API_URL = ''
export const FAKE_API_URL = '/@src/@fake-db'

export const pollTypes = {
  IMAGE: 'image',
  SHORTTEXT: 'short-text',
  AUDIO: 'audio',
  VIDEO: 'video',
  WEB_PLATFORM: 'web-platform',
}

export const pollSteps = {
  CREATE_POLL: 'CREATE_POLL',
  SELECT_AUDIENCE: 'SELECT_AUDIENCE',
  CHECKOUT: 'CHECKOUT',
}
export const COLORS = ['#0A3C81', '#016AE9']

export const costPerResponse = 1

export const infoTxt = `This label will only be used for your own
data and analysis. It will not be visible to
respondents answering your poll`

export const confirmationMessage =
  'You have unsaved changes. Are you sure you want to leave?'

export const getPreviewInstructions = (type) => {
  const { AUDIO, VIDEO } = pollTypes
  const instructions = [
    'Pick one of the two options based on the question below.',
    'Please provide a detailed explanation for your choice. (Note: Empty/Incomplete responses will be rejected)',
  ]

  if (type === AUDIO) {
    return ['First listen to both of these audio files.', ...instructions]
  } else if (type === VIDEO) {
    return ['First watch both of these videos.', ...instructions]
  } else return instructions
}

export const sentimentTypes = {
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutral',
  mixed: 'mixed',
}

export const comparisions = {
  NotEqualTo: 'is not',
  EqualTo: 'is',
}

export const LOGIN_FORM_INITIALS = {
  email: '',
  password: '',
}

export const pollSortOptions = [
  { value: 'recent', text: 'Most Recent' },
  { value: 'name', text: 'Name' },
  { value: 'response:ascending', text: 'Responses: Low to High' },
  { value: 'response:descending', text: 'Responses: High To Low' },
]

export const winnerResultStatus = {
  leading: 'LEADING',
  winner: 'WINNER',
  tied: 'TIED',
}

export const PUBLIC_ROUTE_KEY = 'public'
export const PRIVATE_ROUTE_KEY = 'private'
export const ATTEMPT_URL = 'attemptURL'
export const COUPON_CODE = 'coupon'
