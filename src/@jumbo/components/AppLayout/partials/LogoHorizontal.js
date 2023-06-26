import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import { Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import CmtImage from '../../../../@coremat/CmtImage'

const LogoHorizontal = ({ color, ...props }) => {
  const logoUrl =
    color === 'white'
      ? '/images/logo-horizontal-white.png'
      : '/logo-horizontal-color.png'
  const logoSymbolUrl =
    color === 'white'
      ? '/images/logo-symbol-white.png'
      : '/images/logo-symbol-color.png'

  return (
    <Box className="pointer" {...props}>
      <Hidden xsDown>
        <NavLink to="/">
          <CmtImage src={logoUrl} alt="Poll the People" />
        </NavLink>
      </Hidden>
      <Hidden smUp>
        <NavLink to="/">
          <CmtImage src={logoSymbolUrl} alt="Poll the People" />
        </NavLink>
      </Hidden>
    </Box>
  )
}

export default LogoHorizontal
