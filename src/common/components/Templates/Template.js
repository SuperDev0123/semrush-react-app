import * as React from 'react'
import { Link, useHistory } from 'react-router-dom'
import pt from 'prop-types'
import { Box, Typography } from '@material-ui/core'

import { When } from '@src/common/components'
import { browserRoutes } from '@src/common/browserRoutes'
import { pollCreationSteps } from '@src/routes/PollCreation/common/constants'
import { Storage } from '@src/routes/PollCreation/common/services'

import { useTemplateStyles } from './Templates.styles'

const BookmarkPath = '/images/templates/Bookmark.png'

const Template = ({
  id,
  name,
  description,
  thumbnail,
  isRecommended = false,
  onClose: closeTemplatesModal,
}) => {
  const classes = useTemplateStyles()
  const history = useHistory()

  const goToTemplate = () => {
    closeTemplatesModal()
    Storage.delete(`${id}-${pollCreationSteps.DESIGN}`)
    history.push(browserRoutes.POLL_CREATION(id))
  }

  return (
    <Box className={classes.template} onClick={goToTemplate}>
      <Box className={classes.header}>
        <img
          className={classes.thumbnail}
          src={thumbnail}
          alt="Template thumbnail"
        />
        <Box className={classes.templateDetails}>
          <Typography className={classes.name}>{name}</Typography>
          {/* <When condition={isRecommended}>
          <img
            src={BookmarkPath}
            className={classes.bookmark}
            alt="Template is recommended bookmark thumbnail"
          />
        </When> */}
          <Box className={classes.body}>
            <Typography className={classes.description}>
              {description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Template.defaultProps = {
  is_recommended: false,
}

Template.propTypes = {
  name: pt.string.isRequired,
  description: pt.string.isRequired,
  thumbnail: pt.string.isRequired,
  onClose: pt.func.isRequired,
  is_recommended: pt.bool,
}

export default Template
