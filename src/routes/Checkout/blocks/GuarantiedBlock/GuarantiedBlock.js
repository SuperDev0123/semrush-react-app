import React from 'react'
import { Box, Typography } from '@material-ui/core'

import Icons from '@src/common/assets/icons'

import Pic1 from '@src/common/assets/images/pic-1.png'

const GuarantiedBlock = ({ classes }) => {
  return (
    <Box className={classes.checkoutGuaranted}>
      <Icons.LockIcon />
      <Typography className={classes.checkoutGuarantedText}>
        Guaranteed <strong>Safe</strong> & <strong>Secure</strong> Checkout
      </Typography>
      <img src={Pic1} alt="powered by stripe" />
    </Box>
  )
}

export default GuarantiedBlock
