import * as React from 'react'
import pt from 'prop-types'
import { Box } from '@material-ui/core'

import { WithLoader } from '@src/routes/PollCreation/ui/components'

import Template from './Template'
import { useTemplatesStyles } from './Templates.styles'

const TemplatesList = ({ templates = [], onClose, isLoading }) => {
  const classes = useTemplatesStyles()

  return (
    <Box className={classes.templates}>
      <WithLoader
        isLoading={isLoading}
        skeletonCount={4}
        skeletonProps={{
          width: '282px',
          height: 122,
          variant: 'rectangle',
          style: {
            margin: '13px',
          },
        }}
      >
        {templates.map((template) => (
          <Template onClose={onClose} key={template.id} {...template} />
        ))}
      </WithLoader>
    </Box>
  )
}

TemplatesList.defaultProps = {
  templates: [],
  isLoading: false,
}

TemplatesList.propTypes = {
  templates: pt.array.isRequired,
  onClose: pt.func.isRequired,
  isLoading: pt.bool.isRequired,
}

export default TemplatesList
