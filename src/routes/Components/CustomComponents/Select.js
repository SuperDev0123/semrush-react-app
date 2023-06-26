import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      // marginTop: theme.spacing(6),
    },
    '& .MuiSelect-select.MuiSelect-select': {
      fontSize: '14px',
      borderRadius: '5px',
      color: theme.palette.common.black,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: theme.palette.common.white,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: 'Poppins regular',
    fontSize: '14px',
    '&:focus': {
      borderRadius: 4,
      borderColor: 'transparent',
      boxShadow: '0px 0px 3px 0.1rem rgb(0 123 255 / 25%)',
    },
  },
  labelText: {
    fontFamily: 'Poppins Bold',
    fontSize: '14px',
  },
}))(InputBase)
const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: theme.palette.common.black,
    fontFamily: 'Poppins Regular',
    fontSize: '14px',
    '&:focus': {
      color: theme.palette.common.black,
    },
  },
}))(MenuItem)

const StyledLabel = withStyles((theme) => ({
  root: {
    fontSize: '0.9rem',
    color: theme.palette.common.black,
    fontFamily: 'Poppins regular',
    '&.MuiInputLabel-filled.MuiInputLabel-shrink': {
      display: 'none',
    },
  },
}))(InputLabel)

const useStyles = makeStyles((theme) => ({
  margin: {
    selectedTextColor: theme.palette.common.black,
    width: '100%',
    '& #select-native': {
      fontFamily: "'made_tommyregular',sans-serif",
      color: theme.palette.common.black,
    },
  },
}))
const CustomSelect = ({
  options,
  label,
  value,
  handleChange,
  emptyOption = false,
  formControlStyles = {},
  customLabel,
  optionLabelField,
  optionValueField,
  titleField,
  ...props
}) => {
  const classes = useStyles()
  return (
    <FormControl
      style={formControlStyles}
      variant="filled"
      fullWidth
      className={`${classes.margin} form-control`}
    >
      {label && (
        <StyledLabel
          id="simple-select-filled-label"
          htmlFor="name-multiple"
          className={classes.labelText}
        >
          {label}
        </StyledLabel>
      )}
      <Select
        labelId="simple-select-filled-label"
        id="simple-select-filled"
        value={value}
        onChange={handleChange}
        input={<BootstrapInput id="name-multiple" />}
        margin="normal"
        variant="outlined"
        MenuProps={{
          disableScrollLock: true,
        }}
      >
        {emptyOption && (
          <StyledMenuItem aria-label="None" value="">
            None
          </StyledMenuItem>
        )}
        {options !== null &&
          typeof options !== 'undefined' &&
          options.map((option, index) => (
            <StyledMenuItem
              key={index}
              value={
                optionValueField
                  ? option[optionValueField]
                  : props.customvalue
                  ? props.customvalue(option.id, option)
                  : option.id
              }
              title={
                titleField
                  ? option[titleField]
                  : props.customTitle
                  ? props.customTitle(option.id, option)
                  : option.id
              }
            >
              {customLabel
                ? customLabel(option)
                : optionLabelField
                ? option[optionLabelField]
                : option.name}
            </StyledMenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
