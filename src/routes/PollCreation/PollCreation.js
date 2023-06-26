import * as React from 'react'

import { PollCreationProvider } from './common/context/PollCreationContext'
import {
  PollCreationBody,
  PollCreationHeader,
  PollCreationFooter,
} from './ui/partials'

const PollCreation = () => (
  <PollCreationProvider>
    <PollCreationHeader />
    <PollCreationBody />
    <PollCreationFooter />
  </PollCreationProvider>
)

export default PollCreation
