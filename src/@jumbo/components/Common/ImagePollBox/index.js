import React, { useEffect, useState } from 'react'
import LabelInput from '../LabelInput'
import { Box, makeStyles } from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import clsx from 'clsx'
import IPopper from '../IPopper'
import dtheme from '../../../../common/config/theme/defaultTheme'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
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
  top: 0,
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
}

const titleStyle = {
  fontSize: 20,
  fontWeight: 400,
  fontFamily: 'made_tommyregular, sans-serif',
  lineHeight: '25px',
  backgroundColor: dtheme.palette.primary.dark,
  color: dtheme.palette.primary.contrastText,
}

const ImagePollBox = ({
  optText,
  optCountText,
  infoTxt,
  onSetFile,
  onLabel,
}) => {
  const [files, setFiles] = useState([])
  let idCardBase64 = ''
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const getBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(reader.result)
      onSetFile(reader.result)
    }
    reader.onerror = function (error) {
      console.log('Error: ', error)
    }
  }

  const thumbs = files.map((file) =>
    getBase64(file, (result) => {
      idCardBase64 = result
    })(
      <Box style={thumb} key={file.name} className="option-img">
        <Box style={thumbInner}>
          <img src={file.preview} style={img} alt="" />
        </Box>
      </Box>
    )
  )

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const useStyles = makeStyles((theme) => ({
    optionBox: {
      width: '100%',
      position: 'relative',
      '& .input-label': {
        padding: '22px 11px',
        position: 'relative',
        '& .action-btn': {
          position: 'absolute',
          right: 12,
          bottom: 12,
        },
      },
      '& .input-label,& label': {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        fontSize: 20,
        lineHeight: '25px',
      },
      '& .info-box': {
        position: 'absolute',
        left: 17,
        top: 12,
        zIndex: 1,
        '& .helper-icon': {
          color: '#fff',
          fontSize: 19,
        },
      },
    },
    dropHolder: {
      '& .dropzone': {
        backgroundImage: "url('./../images/plus-mark.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 51px',
        backgroundColor: '#F4F4F4',
        position: 'relative',
        height: 276,
        border: 0,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        cursor: 'pointer',
        '&.hasFile': {
          backgroundImage: 'none',
          cursor: 'auto',
        },
        '& label': {
          position: 'absolute',
          textAlign: 'center',
          color: theme.palette.primary.dark,
          fontFamily: 'made_tommyregular, sans-serif',
          bottom: 50,
          left: 0,
          fontSize: 18,
          lineHeight: '24px',
          fontWeight: 500,
          textTransform: 'uppercase',
        },
        '& .upload-btn': {
          position: 'absolute',
          bottom: 14,
          right: 14,
          fontSize: 18,
          padding: 0,
          border: 0,
          zIndex: 5,
          color: theme.palette.primary.dark,
        },
        '& aside': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          display: 'grid',
          placeContent: 'center',
          height: '100%',
          padding: '0 15px',
        },
      },
    },
  }))

  const classes = useStyles()

  const handleOnDropZoneClick = (callback) => {
    if (files.length === 0) {
      callback()
    }
  }

  return (
    <Box className={clsx(classes.optionBox, 'option-box')}>
      <IPopper>{infoTxt}</IPopper>
      <LabelInput
        onLabelChangeVal={(text) => onLabel(text)}
        label={optText}
        compStyle={titleStyle}
        windowWidth="100%"
        type="input"
      />

      <Box className={classes.dropHolder}>
        <Box
          {...getRootProps({
            className: `dropzone ${files.length > 0 ? 'hasFile' : ''}`,
          })}
        >
          <input {...getInputProps()} />

          {files.length === 0 && <label>Add Image {optCountText}</label>}

          <i className="fas fa-edit upload-btn action-btn" onClick={open}></i>
          <aside
            style={thumbsContainer}
            onClick={() => handleOnDropZoneClick(open)}
          >
            {thumbs}
          </aside>
        </Box>
      </Box>
    </Box>
  )
}

export default ImagePollBox
