import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 12,
    '& .MuiFormLabel-root': {
      fontFamily: "'made_tommyregular', sans-serif",
      fontSize: 14,
      lineHeight: '17px',
      color: '#232521',
      transform: 'unset',
    },
    '& .MuiInputBase-input': {
      border: 0,
      borderRadius: 4,
      padding: '13px 13px 7px 13px',
      backgroundColor: 'rgba(191, 191, 191, 0.15)',
      color: '#232521',
      fontFamily: "'made_tommyregular', sans-serif",
      fontSize: 12,
      lineHeight: '15px',
      marginTop: 10,
    },
    '& .MuiInput-underline': {
      '&:after,&:before': {
        display: 'none',
      },
    },
  },
  submitBtn: {
    fontFamily: "'made_tommylight', sans-serif",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '15px',
    borderRadius: 5,
    backgroundColor: '#232521 !important',
    color: '#fff !important',
    letterSpacing: 0.5,
    '&:hover': {
      backgroundColor: '#23250f',
    },
  },
}))

const PollForm = ({ id, label, placeHolder, helperText }) => {
  const classes = useStyles()
  return (
    <Fragment>
      <TextField
        id={id}
        label={label}
        className={classes.root}
        placeholder={placeHolder}
        helperText={helperText}
        fullWidth
        disabled
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" disabled className={classes.submitBtn}>
        Submit
      </Button>
    </Fragment>
  )
}

PollForm.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeHolder: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
}

PollForm.defaultProps = {
  label: 'Why did you choose this answer?',
  placeHolder: 'Was it appealing? Had a credible message? Was it unique? ',
  helperText: '',
  fullWidth: false,
}

export default PollForm
