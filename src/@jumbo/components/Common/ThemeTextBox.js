import React from 'react'
import { Box, makeStyles, TextField } from '@material-ui/core'
import IPopper from './IPopper'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& .info-box': {
      display: 'inline-block',
      position: 'relative',
      top: 2,
      color: theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
      },
    },
  },
  valInput: {
    width: '50%',
    marginBottom: 20,
    borderWidth: 1,
    borderLeftWidth: 6,
    borderColor: '#7897BB',
    padding: '4px !important',
    background: '#DEEBF1',
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(22px, -9px) scale(.98)',
      padding: '5px',
      fontWeight: 600,
      color: theme.palette.primary.dark,
    },
    '&.MuiFormControl-fullWidth': {
      width: 'calc(100% - 20px)',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#fff',
      color: theme.palette.primary.dark,
      borderRadius: 8,
      '& input': {
        height: 30,
        fontSize: 18,
        fontWeight: 600,
        paddingLeft: 25,
        '&::placeholder': {
          color: theme.palette.primary.dark,
        },
      },
    },
    '& .MuiOutlinedInput-root fieldset': {
      borderColor: '#7897BB',
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&:hover .MuiInputLabel-outlined.MuiInputLabel-shrink,.MuiInputLabel-outlined.MuiInputLabel-shrink.Mui-focused':
      {
        color: theme.palette.primary.main,
      },
    '& .MuiOutlinedInput-root.Mui-focused fieldset,& .MuiOutlinedInput-root fieldset':
      {
        borderWidth: 1,
        borderLeftWidth: 6,
        padding: '4px !important',
        borderRadius: 8,
        '& legend': {
          fontSize: 16,
          marginLeft: 8,
        },
      },
  },
}))

const isEmpty = (str) => !str || str.length === 0

const ThemeTextBox = ({
  label,
  placeholder,
  formik,
  id,
  infoTxt,
  fullwidth = false,
  popIcon = true,
  ...rest
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.valInput}
        label={label}
        fullWidth={fullwidth}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        value={(!!formik && formik.values[id]) ?? ''}
        error={!!formik && formik.touched[id] && !isEmpty(formik.errors[id])}
        helperText={(!!formik && formik.touched[id] && formik.errors[id]) || ''}
        placeholder={placeholder}
        id={id}
        onChange={!!formik && formik.handleChange}
        {...rest}
      />
      {popIcon && <IPopper>{infoTxt}</IPopper>}
    </Box>
  )
}

export default ThemeTextBox
