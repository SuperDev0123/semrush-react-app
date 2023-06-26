import React, { useContext } from 'react'
import { map } from 'lodash'
import { Grid } from '@material-ui/core'

import AudioPollBox from '@src/@jumbo/components/Common/AudioPollBoxNew'
import PollContext from '@src/common/context/PollContext'

import { useAudioPollStyles } from './Common.styles'

const AudioPoll = ({ formik }) => {
  const classes = useAudioPollStyles()
  const { pollData } = useContext(PollContext)
  const infoTxt1 = `This label will only be used for your own
  data and analysis. It will not be visible to
  respondents answering your poll`

  const pollBoxes = [
    {
      id: 1,
      optText: 'Enter text for Audio A',
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
      optText: 'Enter text for Audio B',
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
        <Grid
          item
          xs={12}
          key={pollBox.id}
          className={`${pollBox.id === 1 ? 'poll-wrap' : ''}`}
        >
          <AudioPollBox {...pollBox} />
        </Grid>
      ))}
    </Grid>
  )
}

export default AudioPoll
