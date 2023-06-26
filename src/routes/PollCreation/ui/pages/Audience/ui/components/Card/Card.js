import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import { Box } from '@material-ui/core'

import CardHeader from './CardHeader'

import useCardStyles from './Card.styles'

const Card = ({ children, className }) => {
  const classes = useCardStyles()

  const mergedClassName = classnames(classes.card, {
    [className]: !!className,
  })

  return <Box className={mergedClassName}>{children}</Box>
}

Card.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  clasName: pt.string,
}

export default {
  Wrapper: Card,
  Header: CardHeader,
}
