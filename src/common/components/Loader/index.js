import React from 'react'
import { Box, CircularProgress } from '@material-ui/core'
import PropTypes from 'prop-types'

const Loader = ({ size, color, variant, ...rest }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        marginRight: '9px',
      }}
    >
      <CircularProgress
        variant={variant}
        size={size}
        style={{ color }}
        {...rest}
      />
    </Box>
  )
}
Loader.propTypes = {
  color: PropTypes.oneOfType([
    'inherit',
    'primary',
    'secondary',
    'error',
    'info',
    'success',
    'warning',
    'string',
    'primaryalt',
  ]),
  size: PropTypes.number,
  variant: PropTypes.string,
}

Loader.defaultProps = {
  color: 'blue',
  size: 20,
  variant: 'indeterminate',
}

export default Loader
