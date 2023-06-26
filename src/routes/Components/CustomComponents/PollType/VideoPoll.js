import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import VideoPollBox from '@src/@jumbo/components/Common/VideoPollBox'

const useStyles = makeStyles((theme) => ({
  optionRoot: {
    width: '785px',
    margin: '18px auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
    '& .option-box': {
      [theme.breakpoints.down('sm')]: {
        width: '330px',
        margin: '0 auto',
      },
    },
  },
}))

const VideoPoll = () => {
  const classes = useStyles()

  const infoTxt1 = `This label will only be used for your own
    data and analysis. It will not be visible to
    respondents answering your poll`

  return (
    <Grid container spacing={4} className={classes.optionRoot}>
      <Grid item xs={12} md={6}>
        <VideoPollBox
          optText="Enter text for Video A"
          fontSize="20"
          fontWeight="300"
          lineHeight="24"
          optCountText="A"
          infoTxt={infoTxt1}
          optionText="Option A"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <VideoPollBox
          optText="Enter text for Video B"
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

export default VideoPoll
