import React, { useContext, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import { Box, Button, FormHelperText } from '@material-ui/core'

import { When } from '@src/common/components'
import PollContext from '@src/common/context/PollContext'

import ThemeTextBox from '../ThemeTextBox'
import { useStyles } from './style'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 5,
}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 0,
  marginRight: 0,
  maxWidth: 250,
  padding: 4,
  boxSizing: 'border-box',
  position: 'absolute',
  top: -5,
  height: 250,
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}

// const img = {
//   display: 'block',
//   width: 'auto',
//   height: '100%',
// }

const ImagePollBox = ({
  optText,
  optCountText,
  infoTxt,
  txtId,
  fileId,
  formik,
  text = '',
  file = '',
}) => {
  const { setOriginalFiles } = useContext(PollContext)
  const [files, setFiles] = useState([])
  const classes = useStyles()
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      const aFiles = acceptedFiles.map((file) => {
        setOriginalFiles((prevState) => ({
          ...prevState,
          [fileId]: file,
        }))

        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      })
      setFiles(aFiles)
      formik.setFieldValue(fileId, URL.createObjectURL(aFiles[0]))
    },
  })

  const thumbs = files.map((file) => (
    <Box style={thumb} key={file.name} className="option-img">
      <Box style={thumbInner}>
        <img className={classes.previewThumb} src={file.preview} alt="" />
      </Box>
    </Box>
  ))

  const handleOnDropZoneClick = (callback) => {
    if (files.length === 0) callback()
  }

  useEffect(() => {
    if (file) {
      setFiles([{ name: 'tempImage', preview: file }])
    }
  }, [])

  const isEmpty = (str) => !str || str.length === 0

  return (
    <Box className={clsx(classes.optionBox, 'option-box')}>
      <ThemeTextBox
        label={`Image ${optCountText}`}
        fullwidth={true}
        placeholder={optText}
        infoTxt={infoTxt}
        id={txtId}
        name={txtId}
        value={text}
        formik={formik}
      />
      <Box className={classes.dropHolder}>
        <Box
          {...getRootProps({
            className: `dropzone ${files.length > 0 ? 'hasFile' : ''}`,
          })}
        >
          <input {...getInputProps()} />
          <When condition={files.length === 0}>
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                onClick={open}
              >
                Add Image {optCountText}
              </Button>
            </label>
          </When>
          <i className="fas fa-edit upload-btn action-btn" onClick={open}></i>
          <aside
            style={thumbsContainer}
            onClick={() => handleOnDropZoneClick(open)}
          >
            {thumbs}
          </aside>
        </Box>
      </Box>
      <When
        condition={
          !!formik && formik.touched[fileId] && !isEmpty(formik.errors[fileId])
        }
      >
        <FormHelperText
          className={classes.dropHolderError}
          id="helper-text"
          error
        >
          {formik.errors[fileId]}
        </FormHelperText>
      </When>
    </Box>
  )
}

export default ImagePollBox
