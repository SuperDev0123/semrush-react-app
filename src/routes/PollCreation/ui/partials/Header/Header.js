import * as React from 'react'
import { Box } from '@material-ui/core'

import { HeaderBlock } from '../../blocks'
import useHeaderStyles from './Header.styles'

const Header = () => {
  const classes = useHeaderStyles()

  return (
    <Box className={classes.header}>
      <HeaderBlock />
    </Box>
  )
}

export default Header
