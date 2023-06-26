import * as React from 'react'
import pt from 'prop-types'
import classnames from 'classnames'
import { Box, Input } from '@material-ui/core'

import IPopper from '@src/@jumbo/components/Common/IPopper'
import Icons from '@src/common/assets/icons'
import { When } from '@src/common/components'
import { Tooltip } from '@src/routes/PollCreation/ui/components'

import useNumberFieldStyles from './NumberField.styles'

const NumberFieldToolTip = ({ title }) => {
  return (
    <Tooltip title={title}>
      <Icons.InfoIcon />
    </Tooltip>
  )
}

NumberFieldToolTip.propTypes = {
  title: pt.string.isRequired,
}

/***
 * @NumberField - this component is temporarily. Because, we have no constantly design and time is short.
 * Just we have a structure. You can redesign this component and add this component to the global Form component for
 * automatically react-hook-form implementation!!! -- some validations are ont fully completed!!!
 * ***/
const NumberField = ({
  name,
  placeholder,
  value,
  defaultValue,
  wrapperClassName,
  inputClassName,
  inputProps,
  max,
  min,
  onChange,
  info,
  isPositive,
  ...rest
}) => {
  const classes = useNumberFieldStyles()

  const [internalValue, setInternalValue] = React.useState(
    value || defaultValue || ''
  )

  const mergedWrapperClassName = classnames(classes.numberFieldWrapper, {
    [wrapperClassName]: !!wrapperClassName,
  })

  const mergedInputClassName = classnames(classes.numberField, {
    [inputClassName]: !!inputClassName,
  })

  const onChangeHandler = (event) => {
    const { value } = event.target
    if (
      isPositive &&
      (value.includes('-') || value.includes('+') || value.trim() < 0)
    )
      return

    if (max && max !== Infinity && value > max) return
    if (min && min !== -Infinity && value < min) return

    setInternalValue(value)
    onChange && onChange(event)
  }

  return (
    <Box className={mergedWrapperClassName}>
      <Input
        name={name}
        placeholder={placeholder}
        className={mergedInputClassName}
        value={internalValue}
        type="number"
        onChange={onChangeHandler}
        inputProps={{
          max,
          min,
          ...(inputProps ?? {}),
        }}
        {...rest}
      />
      <When condition={info}>
        <IPopper className="info-box">{info}</IPopper>
      </When>
    </Box>
  )
}

NumberField.defaultProps = {
  max: Infinity,
  min: -Infinity,
  isPositive: false,
}

NumberField.propTypes = {
  name: pt.string,
  placeholder: pt.string,
  value: pt.number,
  inputClassName: pt.string,
  wrapperClassName: pt.string,
  max: pt.number,
  min: pt.number,
  isPositive: pt.bool,
  info: pt.any,
}

export default NumberField
