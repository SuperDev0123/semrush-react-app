import React from 'react'
import {
  makeStyles,
  withStyles,
  InputLabel,
  FormControl,
  NativeSelect,
  InputBase,
} from '@material-ui/core'
import { map } from 'lodash'

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
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const useStyles = makeStyles((theme) => ({
  customizedRoot: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& .MuiInputLabel-shrink': {
      transform: 'unset',
      position: 'relative',
      fontFamily: 'made_tommyregular',
      color: theme.palette.primary.main,
    },
    '& .MuiInputBase-root': {
      marginTop: '0 !important',
      marginLeft: 5,
      width: 165,
      '& .MuiNativeSelect-root': {
        boxShadow: '0px 0px 11px rgb(218 218 218 / 25%)',
        border: 0,
        borderRadius: 8,
        color: '#000',
        fontSize: 15,
        lineHeight: '17px',
        '&:focus': {
          backgroundColor: 'rgba(255,255,255,.95) !important',
        },
      },
    },
  },
}))

const CustomizedSelect = ({ options, id, label, value, setValue }) => {
  const classes = useStyles()
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return (
    <FormControl className={classes.customizedRoot}>
      <InputLabel htmlFor={`customized-select_${id}`}>{label}</InputLabel>
      <NativeSelect
        id={`customized-select_${id}`}
        value={value}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        {map(options, (option, key) => (
          <option value={option.value} key={`cms_${key}`}>
            {option.text}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CustomizedSelect
