import * as React from 'react'
import pt from 'prop-types'
import { Typography } from '@material-ui/core'

import useAddCriteriaButtonStyles from './AddCriteriaButton.styles'

const AddCriteriaButton = ({ onClick, ...rest }) => {
  const classes = useAddCriteriaButtonStyles()

  return (
    <Typography onClick={onClick} className={classes.root} {...rest}>
      add new criteria
    </Typography>
  )
}

AddCriteriaButton.propTypes = {
  label: pt.string,
  onClick: pt.func.isRequired,
}

export default AddCriteriaButton
