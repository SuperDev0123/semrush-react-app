import * as React from 'react'
import { makeStyles } from '@material-ui/core'

export const fileFieldStyles = {
  baseStyle: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '120px',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    backgroundColor: '#F9F9F9',
    border: '1px dashed rgba(0, 0, 0, 0.35)',
    boxSizing: 'border-box',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  focusedStyle: {
    border: '1px dashed #2196f3',
  },
  acceptStyle: {
    border: '1px dashed #00e676',
  },
  rejectStyle: {
    border: '1px dashed #ff1744',
  },
  errorStyle: {
    border: '1px dashed #F44336',
  },
}

export const DefaultPlaceholderElement = ({
  validationDescription,
  placeholder,
}) => {
  const useStyle = makeStyles((theme) => ({
    preTag: {
      color: 'rgba(0, 0, 0, 0.75)',
      fontSize: '11px',
      fontFamily: 'Poppins Regular',
    },
  }))
  const classes = useStyle()
  return (
    <>
      <strong>{placeholder || 'Drag and drop to upload files'}</strong>
      <pre className={classes.preTag}>{validationDescription}</pre>
    </>
  )
}
