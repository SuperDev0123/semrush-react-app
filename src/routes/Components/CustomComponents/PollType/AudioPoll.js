import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import AudioPollBox from '@src/@jumbo/components/Common/AudioPollBox'

const useStyles = makeStyles((theme) => ({
  optionRoot: {
    width: '804px',
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    '& .option-box': {
      '& .input-label': {
        padding: '8px 15px 8px 45px',
        fontWeight: 400,
      },
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        margin: '0 auto',
      },
    },
  },
}))

const AudioPoll = ({
  onGetFileA,
  onLabelChangeA,
  onLabelChangeB,
  onGetFileB,
}) => {
  const classes = useStyles()

  const infoTxt1 = `This label will only be used for your own
    data and analysis. It will not be visible to
    respondents answering your poll`

  return (
    <Grid container spacing={4} className={classes.optionRoot}>
      <Grid item xs={12}>
        <AudioPollBox
          onLabel={(text) => onLabelChangeA(text)}
          onSetFile={(file) => onGetFileA(file)}
          optText="Enter text for Audio A"
          fontSize="20"
          fontWeight="300"
          lineHeight="24"
          optCountText="A"
          infoTxt={infoTxt1}
          optionText="Option A"
        />
      </Grid>
      <Grid item xs={12}>
        <AudioPollBox
          onLabel={(text) => onLabelChangeB(text)}
          onSetFile={(file) => onGetFileB(file)}
          optText="Enter text for Audio B"
          fontSize="20"
          fontWeight="300"
          lineHeight="24"
          optCountText="B"
          infoTxt={infoTxt1}
          optionText="Option B"
        />
      </Grid>
    </Grid>
  )
}

export default AudioPoll
