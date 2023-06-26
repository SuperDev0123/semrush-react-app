import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'

import { spacing } from '@material-ui/system'
import { Button as MUIButton, styled } from '@material-ui/core'

import useButtonStyles from './Button.styles'

const buttonPrefixCls = 'btn'

const Button = ({ variant, spacing, className, children, ...rest }) => {
  const classes = useButtonStyles()

  const mergedClassName = classnames(
    classes.button,
    { [`${buttonPrefixCls}-${[className]}`]: !!className },
    { [`${buttonPrefixCls}-${[variant]}`]: !!variant }
  )

  return (
    <MUIButton className={mergedClassName} {...rest}>
      {children}
    </MUIButton>
  )
}

Button.defaultProps = {
  variant: 'contained',
}

Button.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  variant: pt.oneOf(['contained', 'outlined']),
  className: pt.string,
}

const StyledButton = styled(Button)(spacing)

export default StyledButton
