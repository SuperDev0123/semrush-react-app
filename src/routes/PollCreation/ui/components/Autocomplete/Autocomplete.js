import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import { Autocomplete as MUIAutocomplete } from '@material-ui/lab'

import TextField from '../TextField'
import AutocompletePopper from './AutcompletePopper'

import useAutocompleteStyles from './Autocomplete.styles'

const Autocomplete = ({ className, ...rest }) => {
  const classes = useAutocompleteStyles()

  const mergedClassName = classnames(classes.autocomplete, {
    [className]: !!className,
  })

  return (
    <MUIAutocomplete
      className={mergedClassName}
      renderInput={(params) => <TextField {...params} />}
      PopperComponent={AutocompletePopper}
      {...rest}
    />
  )
}

Autocomplete.propTypes = {
  className: pt.string,
}

export default Autocomplete
