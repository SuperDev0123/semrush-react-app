import * as React from 'react'
import { Box } from '@material-ui/core'

import useFooterStyles from './Footer.styles'

const Footer = () => {
  const classes = useFooterStyles()

  return <Box className={classes.footer} />
}

export default Footer
