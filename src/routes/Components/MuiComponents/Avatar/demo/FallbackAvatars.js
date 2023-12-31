import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import { deepOrange } from '@material-ui/core/colors'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}))

export default function FallbackAvatars() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src={'https://via.placeholder.com/150x150'}
        className={classes.orange}
      >
        B
      </Avatar>
      <Avatar
        alt="Remy Sharp"
        src={'https://via.placeholder.com/150x150'}
        className={classes.orange}
      />
      <Avatar src={'https://via.placeholder.com/150x150'} />
    </Box>
  )
}
