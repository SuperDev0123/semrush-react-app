import * as React from 'react'
import { Box } from '@material-ui/core'

import { SuggestionsBody } from './ui/partials'

import useSuggestionsStyles from './Suggestions.styles'

const Suggestions = () => {
  const classes = useSuggestionsStyles()

  return (
    <Box className={classes.guest}>
      <SuggestionsBody />
    </Box>
  )
}

export default Suggestions
