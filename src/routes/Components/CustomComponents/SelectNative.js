import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { FormControl, NativeSelect, InputBase } from '@material-ui/core'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(6),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '15px 26px 15px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      padding: '1rem',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  margin: {
    width: '100%',
    '& #select-native': {
      fontFamily: "'made_tommyregular',sans-serif",
      color: '#000',
    },
  },
}))

const SelectNative = ({
  children,
  value,
  setValue,
  indx,
  emptyOption = false,
  formControlStyles = {},
}) => {
  const classes = useStyles()

  const handleChange = (event) => {
    setValue(event.target.value, indx)
  }

  return (
    <FormControl
      style={formControlStyles}
      className={`${classes.margin} form-control`}
    >
      <NativeSelect
        id="select-native"
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {emptyOption && <option aria-label="None" value="" />}
        {children}
      </NativeSelect>
    </FormControl>
  )
}

export default SelectNative
