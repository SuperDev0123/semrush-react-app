import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
}))

export default function BadgeOverlap() {
  const classes = useStyles()

  const rectangle = <Box className={classes.shape} />
  const circle = <Box className={clsx(classes.shape, classes.shapeCircle)} />

  return (
    <Box className={classes.root}>
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circle" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </Box>
  )
}
