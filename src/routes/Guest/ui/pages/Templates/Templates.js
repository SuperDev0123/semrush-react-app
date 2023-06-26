import * as React from 'react'
import { Box } from '@material-ui/core'

import { GuestLayout } from '../../components'
import { TemplatesBody } from './ui/partials'

import useTemplatesStyles from './Templates.styles'

const Templates = () => {
  const classes = useTemplatesStyles()

  return (
    <GuestLayout>
      <Box className={classes.templates}>
        <TemplatesBody />
      </Box>
    </GuestLayout>
  )
}

export default Templates
