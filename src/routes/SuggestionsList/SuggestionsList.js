import * as React from 'react'
import { Box } from '@material-ui/core'

import { SuggestionsListBody } from './ui/partials'

import useSuggestionsListStyles from './SuggestionsList.styles'

const SuggestionsList = () => {
  const classes = useSuggestionsListStyles()

  return (
    <Box className={classes.guest}>
      <SuggestionsListBody />
    </Box>
  )
}

export default SuggestionsList
