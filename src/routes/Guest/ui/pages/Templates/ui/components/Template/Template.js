import * as React from 'react'
import pt from 'prop-types'
import { Box, Typography } from '@material-ui/core'

import useTemplateStyles from './Template.styles'

const Template = ({ name, thumbnail, description, ...rest }) => {
  const classes = useTemplateStyles()

  return (
    <Box className={classes.templateWrapper} {...rest}>
      <Box className={classes.template}>
        <Box className={classes.header}>
          <img src={thumbnail} alt="Template icon" className={classes.img} />
        </Box>
        <Box className={classes.templateDetails}>
          <Typography className={classes.name}>{name}</Typography>
          <Box className={classes.middle}>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

Template.propTypes = {
  name: pt.string.isRequired,
  thumbnail: pt.string.isRequired,
  description: pt.string.isRequired,
}

export default Template
