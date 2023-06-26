import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '9px 13px 12px 17px',
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Poppins Regular',
    fontSize: 13,
    lineHeight: '16px',
    borderRadius: 7,
    maxWidth: 300,
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
      [theme.breakpoints.down('sm')]: {
        left: 35,
      },
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'calc(100% - 8px)',
    },
  },
  infoBox: {
    '& button': {
      backgroundColor: 'transparent',
      border: 0,
      '&:hover,&:focus': {
        backgroundColor: 'transparent',
        border: 0,
        outline: 0,
      },
    },
  },
  transitionPopper: {
    fontSize: 13,
    zIndex: 6,
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
}))

export default function IPopper({ children }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [placement, setPlacement] = useState('top')

  const handleHover = (newPlacement) => (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
    setPlacement(newPlacement)
  }

  const open = Boolean(anchorEl)

  return (
    <Box
      className={`${classes.infoBox} info-box`}
      onMouseLeave={handleHover('top')}
    >
      <i
        className="fas fa-info-circle helper-icon action-btn"
        onMouseOver={handleHover('top')}
      ></i>
      <Popper
        className={`${classes.transitionPopper}`}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <div className={classes.paper}>{children}</div>
          </Fade>
        )}
      </Popper>
    </Box>
  )
}
