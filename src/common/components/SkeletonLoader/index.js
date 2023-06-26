import React from 'react'
import { Skeleton } from '@material-ui/lab'
import PropTypes from 'prop-types'

const SkeletonLoader = ({ variant, width, height, ...rest }) => {
  return <Skeleton variant={variant} width={width} height={height} {...rest} />
}

SkeletonLoader.propTypes = {
  variant: PropTypes.oneOfType(['circle', 'rect', 'text']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animation: PropTypes.oneOfType(['pulse', 'wave', 'false']),
}

SkeletonLoader.defaultProps = {
  variant: 'rect',
  width: 40,
  height: 40,
  animation: 'wave',
}
export default SkeletonLoader
