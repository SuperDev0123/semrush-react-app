import * as React from 'react'
import { Box } from '@material-ui/core'

import { SuggestionsLayout } from '../../components'
import { TemplatesBody } from './ui/partials'

import useTemplatesStyles from './Templates.styles'

const Templates = () => {
  const classes = useTemplatesStyles()

  return (
    <SuggestionsLayout>
      <Box className={classes.templates}>
        <TemplatesBody />
      </Box>
    </SuggestionsLayout>
  )
}

export default Templates
