import React, { useEffect, useState } from 'react'
import {
  Box,
  InputLabel,
  TextareaAutosize,
  makeStyles,
} from '@material-ui/core'
import AppTextInput from '../formElements/AppTextInput'
import clsx from 'clsx'

const LabelInput = ({
  onLabelChangeVal,
  label,
  compStyle,
  windowWidth,
  width = 'auto',
  type = 'input',
  classnm = '',
  children,
}) => {
  const [editMode, setEditMode] = useState(false)
  const [cwidth, setCwidth] = useState(150)
  const [name, setName] = useState('')

  const inherit = {
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    fontFamily: 'inherit',
    color: 'inherit',
    width: `${width}${width !== 'auto' ? 'px' : ''}`,
  }

  const commonStyle = {
    display: 'none',
    maxWidth: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    '&.show': {
      display: 'inline-flex',
    },
  }

  const useStyles = makeStyles((theme) => ({
    labelInput: {
      ...compStyle,
      position: 'relative',
      maxWidth: '100%',
      '& i': {
        fontSize: 14,
        lineHeight: 1.5,
      },
      '& .MuiInputBase-root': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
      },
      '& .MuiInput-underline': {
        '&:before,&:after': {
          display: 'none',
        },
      },
      '& .edit-action': {
        position: 'absolute',
        right: 10,
        bottom: 10,
        fontSize: 16,
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5em',
        lineHeight: 1.1,
      },
    },
    inputLabel: {
      ...inherit,
      marginRight: 10,
      '&.hidden': {
        display: 'none',
      },
    },
    inputBoxRoot: {
      ...commonStyle,
      '&.show': {
        display: 'flex',
        flexBasis: '100%',
      },
      '& .MuiInputBase-input': {
        ...compStyle,
        textAlign: 'left',
        borderBottom: 0,
        display: 'inline-flex',
        padding: 0,
        marginBottom: 0,
        '&:after': {
          display: 'none',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1em',
          lineHeight: 1.1,
        },
      },
    },
    textBoxRoot: {
      ...commonStyle,
      ...inherit,
      ...compStyle,
      border: 0,
      '&:focus': {
        outline: 0,
      },
    },
  }))

  const classes = useStyles()

  useEffect(() => {
    if (label && label !== '') {
      setName(label)
      setCwidth((label.length + 1) * 12)
    } else {
      setName(children)
      setCwidth((children.length + 1) * 12)
    }
  }, [label])

  const onLabelChange = (event) => {
    const label = event.target.value
    const size = (label.length + 1) * 12
    if (size < windowWidth) {
      setCwidth(size)
    }
    setName(label)
    onLabelChangeVal(label)
  }

  const toggleInput = () => {
    setEditMode((currEditMode) => !currEditMode)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') setEditMode(false)
  }

  return (
    <Box className={`${classnm}`}>
      <Box
        display="inline-flex"
        justifyContent="center"
        alignItems="center"
        p={4}
        className={clsx(classes.labelInput, `input-label ${type}`)}
      >
        <InputLabel
          htmlFor="label"
          className={`${classes.inputLabel} ${editMode ? 'hidden' : ''}`}
        >
          {name || ''}
        </InputLabel>
        {type === 'textarea' ? (
          <TextareaAutosize
            className={`${classes.textBoxRoot} ${editMode ? 'show' : ''}`}
            aria-label="maximum height"
            placeholder="Maximum 4 rows"
            onChange={onLabelChange}
            defaultValue={name}
          />
        ) : (
          <AppTextInput
            className={`${classes.inputBoxRoot}  ${editMode ? 'show' : ''}`}
            fullWidth={false}
            value={name}
            onKeyPress={handleKeyPress}
            onChange={onLabelChange}
            required
            style={{ width: `${cwidth}px` }}
          />
        )}
        <i
          className={`fas fa-${
            editMode ? 'check' : 'edit'
          } action-btn edit-action`}
          onClick={() => toggleInput()}
        ></i>
      </Box>
    </Box>
  )
}

export default LabelInput
