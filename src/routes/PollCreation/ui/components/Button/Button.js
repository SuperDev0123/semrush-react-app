import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'

import { spacing } from '@material-ui/system'
import { Button as MUIButton, styled } from '@material-ui/core'

import useButtonStyles from './Button.styles'

const buttonPrefixCls = 'btn'

const Button = ({ variant, className, children, disabled, ...rest }) => {
  const classes = useButtonStyles()

  const mergedClassName = classnames(
    classes.button,
    { [`${buttonPrefixCls}-${[className]}`]: !!className },
    { [`${buttonPrefixCls}-${[variant]}`]: !!variant }
  )

  return (
    <MUIButton className={mergedClassName} disabled={disabled} {...rest}>
      {children}
    </MUIButton>
  )
}

Button.defaultProps = {
  variant: 'contained',
  disabled: false,
}

Button.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  variant: pt.oneOf(['contained', 'outlined']),
  className: pt.string,
  disabled: pt.bool,
}

const StyledButton = styled(Button)(spacing)

export default StyledButton
