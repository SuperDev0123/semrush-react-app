import * as React from 'react'
import classNames from 'classnames'
import pt from 'prop-types'

import Card from '../Card'

import useContainerStyles from './Container.styles'

const Container = ({ children, wrapperClass }) => {
  const classes = useContainerStyles()

  const mergedClassName = classNames(classes.container, {
    [wrapperClass]: !!wrapperClass,
  })

  return <Card wrapperClass={mergedClassName}>{children}</Card>
}

Container.propTypes = {
  wrapperClass: pt.string,
}

export default Container
