import React from 'react'
import { Box } from '@material-ui/core'

import { SearchBox } from '../../blocks'

import useBodyStyles from './Body.styles'

const Body = () => {
  const classes = useBodyStyles()

  return (
    <Box className={classes.body}>
      <SearchBox />
    </Box>
  )
}

export default Body
