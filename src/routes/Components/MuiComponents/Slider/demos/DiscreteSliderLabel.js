import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(6),
  },
}))

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
]

function valuetext(value) {
  return `${value}°C`
}

export default function DiscreteSliderLabel() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  )
}
