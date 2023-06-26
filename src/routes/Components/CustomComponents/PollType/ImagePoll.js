import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

import ImagePollBox from '@src/@jumbo/components/Common/ImagePollBox'

const useStyles = makeStyles((theme) => ({
  optionRoot: {
    maxWidth: '785px',
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

const ImagePoll = ({
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
      <Grid item xs={12} md={6}>
        <ImagePollBox
          onLabel={(text) => onLabelChangeA(text)}
          onSetFile={(file) => onGetFileA(file)}
          optText="Enter text for Image A"
          fontSize="20"
          fontWeight="300"
          lineHeight="24"
          optCountText="A"
          infoTxt={infoTxt1}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <ImagePollBox
          onLabel={(text) => onLabelChangeB(text)}
          onSetFile={(file) => onGetFileB(file)}
          optText="Enter text for Image B"
          fontSize="20"
          fontWeight="300"
          lineHeight="24"
          optCountText="B"
          infoTxt={infoTxt1}
        />
      </Grid>
    </Grid>
  )
}

export default ImagePoll
