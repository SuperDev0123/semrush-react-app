import React, { useState, useEffect } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import { Check } from '@material-ui/icons'
import { Box, Grid, Input } from '@material-ui/core'

const commonStyle = {
  fontSize: '27px !important',
  fontFamily: "'made_tommyextrabold',sans-serif",
  fontWeight: 900,
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 760 + theme.spacing(6) * 2,
    margin: '42px auto 18px',
    textAlign: 'left',
    '& #pretto-slider': {
      ...commonStyle,
      lineHeight: '35px',
      color: theme.palette.primary.dark,
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      position: 'absolute',
      top: 10,
      color: theme.palette.primary.dark,
      ...commonStyle,
      '&[data-index="0"]': {
        transform: 'translate3d(-42px, -15px, 0)',
        [theme.breakpoints.down('sm')]: {
          transform: 'translate3d(2px, 30px, 0)',
        },
      },
      '&[data-index="1"]': {
        transform: 'translate3d(30px, -15px, 0)',
        [theme.breakpoints.down('sm')]: {
          transform: 'translate3d(-85px, 30px, 0)',
        },
      },
    },
  },
  margin: {
    height: theme.spacing(1),
  },
  paper: {
    padding: '9px 13px 12px 17px',
    backgroundColor: theme.palette.background.paper,
    fontFamily: "'made_tommyregular', sans-serif",
    fontSize: 13,
    lineHeight: '16px',
    borderRadius: 7,
    maxWidth: 265,
    color: '#232521',
    position: 'relative',
    boxShadow: '0px 12px 9px rgba(0, 0, 0, 0.25)',
    top: '-18px',
    '&:after': {
      width: 0,
      height: 0,
      borderLeft: '12px solid transparent',
      borderRight: '12px solid transparent',
      borderTop: '18px solid #fff',
      content: "''",
      position: 'absolute',
      left: 'calc(50% - 11px)',
      bottom: -17,
    },
  },
  transitionPopper: {
    fontSize: 13,
    '&::after': {
      content: '',
      width: 0,
      height: 0,
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderTop: '14px solid #273ab5',
      left: 'calc(50% - 5px)',
      position: 'relative',
      top: '4px',
    },
  },
  responseCount: {
    position: ' relative',
    top: -5,
    '& span,& input': {
      fontSize: '27px !important',
      fontFamily: "'made_tommyextrabold',sans-serif",
      fontWeight: 900,
      color: theme.palette.primary.dark,
    },
  },
  sliderGrid: {
    margin: '0 30px',
  },
}))

const PrettoSlider = withStyles({
  root: {
    color: '#CBD9DF',
    height: 28,
    padding: 0,
    marginBottom: 5,
  },
  thumb: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    marginTop: -8,
    marginLeft: -24,
    color: '#0A3D80',
    '&:before': {
      width: 40,
      height: 40,
      content: "''",
      position: 'absolute',
      left: 'calc(50% - 20px)',
      top: 'calc(50% - 20px)',
      borderRadius: '50%',
      background: '#0a3d80',
    },
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      color: '#fff',
      position: 'relative',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 28px)',
  },
  track: {
    height: 28,
    borderRadius: 31,
    backgroundColor: '#0A3D80',
  },
  rail: {
    height: 28,
    borderRadius: 31,
    boxShadow: '0 0 0 5px #CBD9DF',
  },
})(Slider)

const poperText = `Increasing the number of responses will
  decrease the margin of error of your
  data`

const valuetext = (value) => {
  return `${value}`
}

const ThumbComponent = (props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [placement, setPlacement] = useState('top')
  const [poperTxt, setPoperTxt] = useState(poperText)

  const handleHover = (newPlacement) => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setPlacement(newPlacement)
    setPoperTxt(poperText)
  }

  useEffect(() => {
    if (props.className.includes('MuiSlider-active')) {
      setPoperTxt(props['aria-valuenow'])
    } else {
      setPoperTxt(poperText)
    }
  }, [props])

  const open = Boolean(anchorEl)

  return (
    <span {...props}>
      <Check />
      <Popper
        className={`${classes.transitionPopper}`}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>{poperTxt}</div>
          </Fade>
        )}
      </Popper>
    </span>
  )
}

export default function CustomizedSlider({
  title,
  defaultValue,
  minValue,
  maxValue,
  step,
  getSelectedValue,
}) {
  const classes = useStyles()

  const marks = [
    {
      value: parseInt(minValue),
      label: minValue,
    },
    {
      value: parseInt(maxValue),
      label: maxValue,
    },
  ]

  const handleInputChange = (event) => {
    const value = event.target.value === '' ? '' : Number(event.target.value)
    getSelectedValue(value)
  }

  const handleBlur = (value) => {
    if (value < minValue) {
      getSelectedValue(minValue)
    } else if (value > maxValue) {
      getSelectedValue(maxValue)
    }
  }

  return (
    <Box className={classes.root}>
      <Typography gutterBottom id="pretto-slider">
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item className={classes.responseCount}>
          <span>{minValue}</span>
        </Grid>
        <Grid item xs className={classes.sliderGrid}>
          <PrettoSlider
            valueLabelDisplay="auto"
            aria-label="pretto-slider"
            value={defaultValue}
            min={marks[0].value}
            max={marks[1].value}
            step={parseInt(step)}
            getAriaValueText={valuetext}
            ThumbComponent={ThumbComponent}
            onChange={(event, value) => getSelectedValue(value)}
          />
        </Grid>
        <Grid item className={classes.responseCount}>
          <Input
            className={classes.input}
            value={defaultValue}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: parseInt(step),
              min: parseInt(minValue),
              max: parseInt(maxValue),
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <div className={classes.margin} />
    </Box>
  )
}
