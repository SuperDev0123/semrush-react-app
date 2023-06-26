import * as React from 'react'
import * as yup from 'yup'

import { Form } from '@src/routes/PollCreation/ui/components'

import {
  HTMLFieldTypes,
  fileValidationTypes,
  commonValidationTypes,
  stepOperations,
} from './constants'
import { pollCreationSteps } from '../../../../common/constants'
import { isValidURL } from '../../../../../../common/functions/tools'

export const getSafeValue = (value) => value || ''

export const HTMLFieldFactory = ({ field, props = {} }) => {
  if (!field) return null

  switch (field.type) {
    case HTMLFieldTypes.TEXT:
      return (
        <Form.TextField
          name={getSafeValue(field.name)}
          label={getSafeValue(field.label)}
          // placeholder={getSafeValue(field.default)}
          defaultValue={getSafeValue(field.default)}
          info={getSafeValue(field.description)}
          {...props}
        />
      )
    case HTMLFieldTypes.FILE:
      return (
        <Form.FileField
          name={getSafeValue(field.name)}
          label={getSafeValue(field.label)}
          placeholder={getSafeValue(field.description)}
          validationDescription={getSafeValue(field.validationDescription)}
          options={field.validations ?? {}}
          {...props}
        />
      )
    default:
      return null
  }
}

export const fileTypeValidation = ({ validations }) => {
  const validationType = commonValidationTypes.MIXED
  let validator = yup[validationType]()

  validations.forEach((validation) => {
    const { params, type } = validation

    if (type === fileValidationTypes.REQUIRED) {
      validator = validator.test(type, params[0], (value) => {
        return !!value
      })
    }

    if (type === fileValidationTypes.MAX_SIZE) {
      validator = validator.test(type, params[1], (value) => {
        return value[0].size < params[0] * 1000
      })
    }

    if (type === fileValidationTypes.MIN_SIZE) {
      validator = validator.test(type, params[1], (value) => {
        return value[0].size > params[0] * 1000
      })
    }

    if (type === fileValidationTypes.EXTENSIONS) {
      validator = validator.test(type, params[1], (value) => {
        const extension = value[0].name.split('.')[1]
        return params[0].indexOf(extension) !== -1
      })
    }
  })

  return validator
}

export const validateFileInput = (file, validations) => {
  let error = false

  for (const validation of validations) {
    const { params, type } = validation

    switch (type) {
      case fileValidationTypes.REQUIRED:
        error = !file
        break
      case fileValidationTypes.MAX_SIZE:
        error = file.size > params[0] * 1000
        break
      case fileValidationTypes.MIN_SIZE:
        error = file.size < params[0] * 1000
        break
      case fileValidationTypes.EXTENSIONS:
        {
          const fileNameItems = file.name.split('.')
          error = !params[0].includes(fileNameItems[fileNameItems.length - 1])
        }
        break
    }

    if (error) {
      break
    }
  }

  return error
}

export const urlTypeValidation = ({ validations }) => {
  const validationType = commonValidationTypes.MIXED
  let validator = yup[validationType]()

  validations.forEach((validation) => {
    const { params, type } = validation

    if (type === fileValidationTypes.REQUIRED) {
      validator = validator.test(type, params[0], (value) => {
        return !!value
      })
    }

    if (type === fileValidationTypes.MAX_SIZE) {
      validator = validator.test(type, params[1], (value) => {
        return value[0].size < params[0] * 1000
      })
    }

    if (type === fileValidationTypes.MIN_SIZE) {
      validator = validator.test(type, params[1], (value) => {
        return value[0].size > params[0] * 1000
      })
    }

    validator = validator.test(type, params[1] ?? 'Invalid input', (value) => {
      return isValidURL(value)
    })
  })

  return validator
}

export const createDynamicYupSchema = (schema, config) => {
  const { name, validationType, validations = [] } = config

  if (validationType === commonValidationTypes.FILE) {
    schema[name] = fileTypeValidation(config)
    return schema
  }

  if (validationType === commonValidationTypes.URL) {
    schema[name] = urlTypeValidation(config)
    return schema
  }

  if (!yup[validationType]) {
    return schema
  }
  let validator = yup[validationType]()

  validations.forEach((validation) => {
    const { params, type } = validation
    if (!validator[type]) {
      return
    }
    validator = validator[type](...params)
  })
  schema[name] = validator

  return schema
}

export const stepChangeListener = (currentStep, needleStep) => {
  const steps = Object.values(pollCreationSteps)
  const currentStepIndex = steps.findIndex((step) => step === currentStep)
  const needleStepIndex = steps.findIndex((step) => step === needleStep)

  if (currentStepIndex === needleStepIndex) return stepOperations.SAME

  if (currentStepIndex > needleStepIndex) return stepOperations.PREV

  if (currentStepIndex < needleStepIndex) return stepOperations.NEXT
}
