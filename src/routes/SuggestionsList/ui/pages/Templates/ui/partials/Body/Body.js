import React from 'react'
import { Box } from '@material-ui/core'

import { SearchBoxList } from '../../blocks'

import useBodyStyles from './Body.styles'

const Body = () => {
  const classes = useBodyStyles()

  return (
    <Box className={classes.body}>
      <SearchBoxList />
    </Box>
  )
}

export default Body
