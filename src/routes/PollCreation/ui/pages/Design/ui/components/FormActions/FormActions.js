import * as React from 'react'
import { Box } from '@material-ui/core'

import { Button } from '@src/routes/PollCreation/ui/components'

import useFormActionsStyles from './FormActions.styles'

const FormActions = ({ onSubmitHandler, methods, loading }) => {
  const classes = useFormActionsStyles()

  return (
    <Box className={classes.footerBlock}>
      <Button
        mx={3}
        className={classes.previewButton}
        variant="outlined"
        onClick={methods.handleSubmit((data) => {
          onSubmitHandler(data, true)
        })}
        disabled={loading}
      >
        Save & Preview
      </Button>
      <Button
        disabled={loading}
        onClick={methods.handleSubmit((data) => {
          onSubmitHandler(data)
        })}
        variant="contained"
      >
        Save & Next
      </Button>
    </Box>
  )
}

export default FormActions
