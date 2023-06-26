import React, { useEffect, useState } from 'react'
import LabelInput from '../LabelInput'
import { Box, Grid, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import IPopper from '../IPopper'
import dtheme from '../../../../common/config/theme/defaultTheme'

const titleStyle = {
  fontSize: 24,
  fontWeight: 400,
  fontFamily: 'made_tommyregular, sans-serif',
  lineHeight: '30px',
  backgroundColor: dtheme.palette.primary.dark,
  color: dtheme.palette.primary.contrastText,
}
const boxStyle = {
  fontSize: 28,
  fontWeight: 400,
  maxWidth: '100%',
  width: '100%',
  marginRight: 15,
  fontFamily: 'made_tommyregular, sans-serif',
  lineHeight: '35px',
  backgroundColor: dtheme.palette.primaryalt.main,
  color: '#979797',
}

const TextPollBox = ({ optText, optionText, infoTxt, onOption }) => {
  const [files, setFiles] = useState([])

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  const useStyles = makeStyles((theme) => ({
    checkIcon: {
      fontSize: 30,
      marginTop: 5,
    },
    iconGrid: {
      display: 'flex',
      alignItems: 'center',
    },
    optionBox: {
      width: '100%',
      position: 'relative',
      textAlign: 'left',
      '& .input-label.input': {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: '8px 35px 8px 45px',
      },
      '& .input-label,& label': {
        width: '100%',
      },
      '& .input-label.textarea': {
        minHeight: 82,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      },
      '& .info-box': {
        position: 'absolute',
        left: 12,
        top: 12,
        zIndex: 2,
        '& .helper-icon': {
          color: '#ffffff',
          fontSize: 19,
        },
      },
    },
  }))

  const classes = useStyles()

  return (
    <Grid container spacing={1}>
      <Grid item xs={1} className={classes.iconGrid}>
        <img src="/images/checkCircle.svg" className={classes.checkIcon} />
      </Grid>
      <Grid item xs={11}>
        <Box className={clsx(classes.optionBox, 'option-box')}>
          <IPopper>{infoTxt}</IPopper>
          <LabelInput
            // onLabelChangeVal={(text) => onLabel(text)}
            classnm={classes.optionLabel}
            label={optText}
            compStyle={titleStyle}
            windowWidth="100%"
            type="input"
          />
          <Box className={classes.optionHolder}>
            <LabelInput
              onLabelChangeVal={(text) => onOption(text)}
              label=""
              compStyle={boxStyle}
              type="textarea"
            >
              {optionText}
            </LabelInput>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TextPollBox
