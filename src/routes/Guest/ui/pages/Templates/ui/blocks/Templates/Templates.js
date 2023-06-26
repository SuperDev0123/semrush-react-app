import * as React from 'react'
import { useHistory } from 'react-router-dom'
import pt from 'prop-types'
import { Box } from '@material-ui/core'

import { WithLoader } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import { templatesSkeletonConfig } from '@src/routes/Guest/ui/pages/Templates/common/constants'

import { Template } from '../../components'

import useTemplatesStyles from './Templates.styles'

const Templates = ({ templatesData = [], isLoading }) => {
  const classes = useTemplatesStyles()
  const history = useHistory()

  const goToTemplate = (templateID) => {
    history.push(browserRoutes.POLL_CREATION(templateID))
  }

  return (
    <Box className={classes.templates}>
      <WithLoader
        isLoading={isLoading}
        skeletonCount={6}
        skeletonProps={templatesSkeletonConfig}
      >
        {templatesData.map((templateItem) => (
          <Template
            key={templateItem.id}
            {...templateItem}
            onClick={() => goToTemplate(templateItem.id)}
          />
        ))}
      </WithLoader>
    </Box>
  )
}

Templates.defaultProps = {
  templatesData: [],
}

Templates.propTypes = {
  templatesData: pt.array.isRequired,
  isLoading: pt.bool,
}

export default Templates
