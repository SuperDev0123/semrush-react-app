import React, { useContext } from 'react'
import { map } from 'lodash'
import { Grid } from '@material-ui/core'

import VideoPollBox from '@src/@jumbo/components/Common/VidePollBoxNew'
import PollContext from '@src/common/context/PollContext'

import { useVidioPollStyles } from './Common.styles'

const VideoPoll = ({ formik }) => {
  const classes = useVidioPollStyles()
  const { pollData } = useContext(PollContext)

  const infoTxt1 = `This label will only be used for your own
    data and analysis. It will not be visible to
    respondents answering your poll`

  const pollBoxes = [
    {
      id: 1,
      optText: 'Enter text for Video A',
      fileText: 'Enter youtube link for Video A',
      fontSize: '20',
      fontWeight: '300',
      lineHeight: '24',
      optCountText: 'A',
      txtId: 'textA',
      fileId: 'fileA',
      infoTxt: infoTxt1,
      text: pollData.textA,
      file: pollData.fileA,
      formik,
    },
    {
      id: 2,
      optText: 'Enter text for Video B',
      fileText: 'Enter youtube link for Video B',
      fontSize: '20',
      fontWeight: '300',
      lineHeight: '24',
      optCountText: 'B',
      txtId: 'textB',
      fileId: 'fileB',
      infoTxt: infoTxt1,
      text: pollData.textB,
      file: pollData.fileB,
      formik,
    },
  ]

  return (
    <Grid container spacing={4} className={classes.optionRoot}>
      {map(pollBoxes, (pollBox) => (
        <Grid item xs={12} md={6} key={pollBox.id}>
          <VideoPollBox {...pollBox} />
        </Grid>
      ))}
    </Grid>
  )
}

export default VideoPoll
