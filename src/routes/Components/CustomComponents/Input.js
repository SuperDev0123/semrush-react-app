import React from 'react'
import { FormControl, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 0,
      width: '100%',
      borderRadius: '1rem',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E5E5E5',
      },
      '&:hover fieldset': {
        borderColor: '#E5E5E5',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgba(0,123,255,.25)',
        boxShadow: '0px 0px 4px 0.1rem rgb(0 123 255 / 25%)',
      },
    },
    '& .MuiInputBase-root': {},
    '& .MuiOutlinedInput-input': {
      padding: '9.5px 14px',
    },
    '& .MuiInputBase-input': {
      fontFamily: 'Poppins Regular',
      fontSize: '14px',
      color: theme.palette.common.black,
    },
    '& .MuiFormControl-root': {
      width: '100%',
    },
  },
}))
const CustomInput = ({
  value = '',
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  const classes = useStyles()
  return (
    <FormControl fullWidth>
      <TextField
        className={clsx(classes.root, className)}
        value={value}
        onChange={onChange}
        id="outlined-basic"
        variant="outlined"
        placeholder={placeholder || ''}
        {...rest}
      />
    </FormControl>
  )
}
export default CustomInput
