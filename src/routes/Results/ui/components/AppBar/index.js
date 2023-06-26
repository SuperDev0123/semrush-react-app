import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@material-ui/core'
import useStyles from './style'

const AppBar = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <NavLink to="/dashboard/home">
        <img src={'/images/logo-nav.png'} />
      </NavLink>
    </Box>
  )
}

export default AppBar
