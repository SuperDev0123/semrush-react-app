import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import {
  Card as MUICard,
  CardContent as MUOCardContent,
} from '@material-ui/core'

import useCardStyles from './Card.style'

const Card = ({ children, wrapperClass }) => {
  const classes = useCardStyles()

  const mergedClass = classnames(classes.card, {
    [wrapperClass]: !!wrapperClass,
  })

  return (
    <MUICard className={mergedClass}>
      <MUOCardContent className={classes.cardContent}>
        {children}
      </MUOCardContent>
    </MUICard>
  )
}

Card.propTypes = {
  wrapperClass: pt.string,
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
}

export default Card
