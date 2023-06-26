import React, { useContext, useEffect, useState } from 'react'
import AudioPlayer from 'material-ui-audio-player'
import clsx from 'clsx'
import { Grid, Box, Button, FormHelperText } from '@material-ui/core'

import { When } from '@src/common/components'
import PollContext from '@src/common/context/PollContext'
import ThemeTextBox from '../ThemeTextBox'
import { useStyles, useAudioStyles } from './style'

const AudioPollBox = ({
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

  const [selectedFile, setSelectedFile] = useState(null)
  const [srcFile, setSrcFile] = useState('')
  const classes = useStyles()

  const onSelectedFile = (e) => {
    setSelectedFile(e.target.files[0])
    setOriginalFiles((prevState) => ({
      ...prevState,
      [fileId]: e.target.files[0],
    }))
    formik.setFieldValue(fileId, URL.createObjectURL(e.target.files[0]))
    const reader = new FileReader()
    reader.onload = function () {
      setSrcFile(this.result)
    }
    reader.readAsDataURL(e.target.files[0])
  }

  useEffect(() => {
    if (file !== '') {
      setSrcFile(file)
    }
  }, [file])

  const isEmpty = (str) => !str || str.length === 0

  return (
    <Grid container spacing={1} className={classes.audioHolderWrapper}>
      <Grid item xs={1} className={classes.iconGrid}></Grid>
      <Grid item xs={12} sm={10}>
        <Box className={clsx(classes.optionBox, 'option-box')}>
          <ThemeTextBox
            label={`Audio ${optCountText}`}
            fullwidth={true}
            placeholder={optText}
            infoTxt={infoTxt}
            id={txtId}
            name={txtId}
            value={text}
            formik={formik}
          />
          <Box className={classes.audioHolder}>
            <Box className="dropzone">
              <When condition={selectedFile === null}>
                <Button
                  variant="contained"
                  component="label"
                  className="upload-btn"
                >
                  Add Audio {optCountText}
                  <input
                    type="file"
                    onChange={(e) => onSelectedFile(e)}
                    accept="audio/mp3,audio/*;capture=microphone"
                    hidden
                  />
                </Button>
              </When>
              {selectedFile !== null && (
                <AudioPlayer
                  elevation={1}
                  width="100%"
                  useStyles={useAudioStyles}
                  variation="default"
                  spacing={3}
                  download={false}
                  autoplay={false}
                  order="standart"
                  preload="auto"
                  loop={false}
                  src={srcFile}
                />
              )}
              <i className="fas fa-edit upload-btn action-btn">
                <input
                  type="file"
                  onChange={(e) => onSelectedFile(e)}
                  accept="audio/mp3,audio/*;capture=microphone"
                />
              </i>
            </Box>
          </Box>
          <When
            condition={
              !!formik &&
              formik.touched[fileId] &&
              !isEmpty(formik.errors[fileId])
            }
          >
            <FormHelperText
              className={classes.dropHelpre}
              id="helper-text"
              error
            >
              {formik.errors[fileId]}
            </FormHelperText>
          </When>
        </Box>
      </Grid>
      <Grid item xs={1} className={classes.iconGrid}></Grid>
    </Grid>
  )
}

export default AudioPollBox
