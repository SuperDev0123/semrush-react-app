import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function LeadingClickAway() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box className={classes.root}>
        <button type="button" onClick={handleClick}>
          Open menu dropdown
        </button>
        {open ? (
          <Box className={classes.dropdown}>
            Click me, I will stay visible until you click outside.
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  )
}
