import * as React from 'react'
import pt from 'prop-types'

import './CircularProgress.css'

const CircularProgress = (props) => {
  const {
    size,
    value,
    color,
    className,
    progressColor,
    variant,
    text,
    ...rest
  } = props

  return (
    <div
      {...rest}
      className={className ?? ''}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      id={text}
      style={{
        '--value': value,
        '--size': size,
        '--progressColor': progressColor,
        '--color': color,
        '--display': variant === 'default' ? 'flex' : 'flex',
      }}
    />
  )
}

CircularProgress.defaultProps = {
  size: '44px',
  color: '#369',
  progressColor: '#adf',
  variant: 'percentage',
  text: '',
}

CircularProgress.propTypes = {
  size: pt.string,
  color: pt.string,
  progressColor: pt.string,
  value: pt.string.isRequired,
  className: pt.string,
  variant: pt.oneOf(['default', 'percentage']),
  text: pt.string,
}

export default CircularProgress
