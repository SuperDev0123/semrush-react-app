import * as React from 'react'

import PollContextProvider from '@src/common/context/PollContext'

import AllPollsCore from './AllPolls'

const AllPolls = () => {
  return (
    <PollContextProvider>
      <AllPollsCore />
    </PollContextProvider>
  )
}

export default AllPolls
