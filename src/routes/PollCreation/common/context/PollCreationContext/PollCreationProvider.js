import * as React from 'react'
import pt from 'prop-types'

import { usePollCreation } from '../../hooks'
import PollCreationContext from './PollCreationContext'

const PollCreationProvider = ({ children }) => {
  const providerProps = usePollCreation()

  return (
    <PollCreationContext.Provider value={providerProps}>
      {children}
    </PollCreationContext.Provider>
  )
}

PollCreationProvider.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
}

export default PollCreationProvider
