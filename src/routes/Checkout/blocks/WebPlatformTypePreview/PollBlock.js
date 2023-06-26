import React from 'react'
import clsx from 'clsx'
import { Box, Grid } from '@material-ui/core'

import ThemeTextBox from '@src/@jumbo/components/Common/ThemeTextBox'
import { useStyles } from './styles'

const PollBlock = ({
  optText,
  optCountText,
  infoTxt,
  txtId,
  fileId,
  formik,
  text = '',
  file = '',
}) => {
  const classes = useStyles()

  return (
    <Grid container spacing={1}>
      <Grid item xs={1} className={classes.iconGrid}></Grid>
      <Grid item xs={12} sm={10}>
        <Box className={clsx(classes.optionBox, 'option-box')}>
          <ThemeTextBox
            label={`Option ${optCountText}`}
            fullwidth={true}
            placeholder={`Option ${optCountText}`}
            infoTxt={infoTxt}
            id={txtId}
            name={txtId}
            value={text}
            formik={formik}
          />
          <Box className={classes.textHolder}>
            <ThemeTextBox
              label={`Option ${optCountText}`}
              fullwidth={true}
              placeholder={optText}
              infoTxt={infoTxt}
              popIcon={false}
              id={fileId}
              name={fileId}
              value={file}
              formik={formik}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1} className={classes.iconGrid}></Grid>
    </Grid>
  )
}

export default PollBlock
