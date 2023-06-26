import * as React from 'react'
import pt from 'prop-types'
import { Controller } from 'react-hook-form'

import TextField from '../../TextField'

/***
 * @WF prefix - it means with form, and it is automatically controlled by Controller from react-hook-form.
 * ***/

const WFTextField = ({
  name,
  onBlur,
  onChange,
  error,
  defaultValue,
  ...rest
}) => {
  const getControlledValue = (value) => value ?? ''

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <TextField
          {...rest}
          {...field}
          value={getControlledValue(field.value)}
          onChange={(event) => {
            field.onChange(event)
            onChange(event)
          }}
          onBlur={(event) => {
            field.onBlur()
            onBlur(event)
          }}
          error={!!error || !!fieldState.error}
          helperText={error.message || fieldState.error.message || ''}
        />
      )}
    />
  )
}

WFTextField.propTypes = {
  name: pt.string.isRequired,
  defaultValue: pt.string,
  onChange: pt.func,
  onBlur: pt.func,
  error: pt.object,
}

export default WFTextField
