import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(4),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(10),
    right: theme.spacing(6),
  },
}))

export default function SimpleTooltips() {
  const classes = useStyles()

  return (
    <Box>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </Box>
  )
}
