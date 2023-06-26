import * as React from 'react'
import pt from 'prop-types'
import { FormProvider } from 'react-hook-form'

import WFTextField from './TextField'
import WFileField from './FileField'
import useFormStyles from './Form.styles'

/***
 * @methods is must be instanced of useForm // const methods = useForm() // import {useForm} from 'react-hook-form';
 * ***/
const Form = ({ onSubmit, onError, children, methods, ...rest }) => {
  const classes = useFormStyles()

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit, onError)}
        {...rest}
        className={classes.form}
      >
        {children}
      </form>
    </FormProvider>
  )
}

Form.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
  methods: pt.object.isRequired,
  onSubmit: pt.func.isRequired,
  onError: pt.func,
}

Form.TextField = WFTextField
Form.FileField = WFileField

export default Form
