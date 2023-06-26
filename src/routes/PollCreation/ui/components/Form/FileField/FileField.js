import * as React from 'react'
import pt from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'
import { validateFileInput } from '@src/routes/PollCreation/ui/pages/Design/common/utils'

import FileField from '../../FileField'

/***
 * @WF prefix - it means with form, and it is automatically controlled by Controller from react-hook-form.
 * ***/

const WFileField = ({ name, onBlur, onChange, error, options, ...rest }) => {
  const { setValue } = useFormContext()

  return (
    <Controller
      name={name}
      render={({ field: { value, ...restField }, fieldState }) => {
        return (
          <FileField
            {...rest}
            {...restField}
            value={value}
            onChange={(event) => {
              const selectedFiles = event.target.files
              restField.onChange(selectedFiles)
              setValue(name, selectedFiles)
              const validFileResourceResult = validateFileInput(
                selectedFiles[0],
                options
              )
              onChange(selectedFiles, validFileResourceResult)
            }}
            onBlur={(event) => {
              restField.onBlur()
              onBlur(event)
            }}
            error={!!error || !!fieldState.error}
            helperText={error.message || fieldState.error.message || ''}
          />
        )
      }}
    />
  )
}

WFileField.defaultProps = {
  multiple: false,
}

WFileField.propTypes = {
  multiple: pt.bool,
  name: pt.string.isRequired,
  defaultValue: pt.string,
  onChange: pt.func,
  onBlur: pt.func,
  error: pt.object,
}

export default WFileField
