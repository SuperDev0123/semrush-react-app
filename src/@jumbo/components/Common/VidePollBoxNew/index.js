import React from 'react'
import clsx from 'clsx'
import { Box } from '@material-ui/core'
import ThemeTextBox from '../ThemeTextBox'
import { useStyles } from './style'

const VidePollBoxNew = ({
  optText,
  optCountText,
  infoTxt,
  txtId,
  fileId,
  formik,
  text = '',
  file = '',
  fileText,
}) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.optionBox, 'option-box')}>
      <ThemeTextBox
        label={`Video ${optCountText}`}
        fullwidth={true}
        placeholder={optText}
        infoTxt={infoTxt}
        id={txtId}
        name={txtId}
        value={text}
        formik={formik}
      />

      <ThemeTextBox
        label={`Youtube link ${optCountText}`}
        fullwidth={true}
        placeholder={fileText}
        infoTxt={infoTxt}
        id={fileId}
        name={fileId}
        value={file}
        formik={formik}
      />
    </Box>
  )
}

export default VidePollBoxNew
