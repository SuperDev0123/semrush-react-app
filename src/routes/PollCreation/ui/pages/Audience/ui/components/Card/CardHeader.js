import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import { Box, Typography } from '@material-ui/core'

import { When } from '@src/common/components'

import useCardStyles from './Card.styles'

const CardHeader = ({ children, className, title, color }) => {
  const classes = useCardStyles()

  const mergedClassName = classnames(classes.cardHeader, {
    [className]: !!className,
  })

  return (
    <Box className={mergedClassName}>
      <When condition={!!title}>
        <Typography className={classes.cardHeaderText} style={{ color }}>
          {title}
        </Typography>
      </When>
      {children}
    </Box>
  )
}

CardHeader.defaultProps = {
  color: '#19519D',
}

CardHeader.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]),
  clasName: pt.string,
  title: pt.string,
}

export default CardHeader
