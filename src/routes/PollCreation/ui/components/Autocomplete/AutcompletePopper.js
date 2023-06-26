import * as React from 'react'
import { Popper } from '@material-ui/core'

import { useAutocompletePopperStyles } from './Autocomplete.styles'

const AutocompletePopper = function (props) {
  const classes = useAutocompletePopperStyles()

  return <Popper {...props} className={classes.root} placement="bottom" />
}

export default AutocompletePopper
