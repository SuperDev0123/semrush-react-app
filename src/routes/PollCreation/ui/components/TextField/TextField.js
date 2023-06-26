import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import {
  TextField as MUITextField,
  InputAdornment,
  Box,
  Typography,
} from '@material-ui/core'

import { When } from '@src/common/components'
import Icons from '@src/common/assets/icons'
import { Tooltip } from '@src/routes/PollCreation/ui/components'

import useTextFieldStyles from './TextField.styles'

const TextFieldCoreAdornment = ({ title }) => {
  return (
    <InputAdornment position="end">
      <Tooltip title={title}>
        <Icons.InfoIcon />
      </Tooltip>
    </InputAdornment>
  )
}

TextFieldCoreAdornment.propTypes = {
  title: pt.string.isRequired,
}

const TextFieldCore = ({ className, info, label, InputProps, sx, ...rest }) => {
  const classes = useTextFieldStyles()
  const mergedClassName = classnames(classes.textField, {
    [className]: !!className,
  })

  const mergedInputProps = {
    ...(info && { endAdornment: <TextFieldCoreAdornment title={info} /> }),
    ...InputProps,
  }

  return (
    <Box className={classes.textFieldWrapper} sx={sx || {}}>
      <When condition={!!label}>
        <Typography className={classes.textFieldLabel}>{label}</Typography>
      </When>
      <MUITextField
        {...rest}
        className={mergedClassName}
        InputProps={mergedInputProps}
      />
    </Box>
  )
}

TextFieldCore.defaultProps = {
  InputProps: {},
}

TextFieldCore.propTypes = {
  className: pt.string,
  InputProps: pt.object,
  info: pt.string,
  label: pt.string,
}

const TextField = React.forwardRef((props, ref) => (
  <TextFieldCore innerRef={ref} {...props} />
))

export default TextField
