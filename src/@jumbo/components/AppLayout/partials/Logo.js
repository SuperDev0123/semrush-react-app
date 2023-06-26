import React from 'react'
import Hidden from '@material-ui/core/Hidden'
import { Box } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import CmtImage from '../../../../@coremat/CmtImage'
import makeStyles from '@material-ui/core/styles/makeStyles'
import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  h2: {
    color: '#ffffff',
  },
}))

const Logo = ({ color, ...props }) => {
  const logoSymbolUrl =
    color === 'white'
      ? '/images/logo-white-symbol.png'
      : '/images/logo-symbol.png'
  const classes = useStyles()

  return (
    <Box className="pointer" {...props}>
      <Hidden xsDown>
        <NavLink to="/">
          <h2 className={clsx(classes.h2)}>Poll the People</h2>
        </NavLink>
      </Hidden>
      <Hidden smUp>
        <NavLink to="/">
          <CmtImage src={logoSymbolUrl} alt="logo" />
        </NavLink>
      </Hidden>
    </Box>
  )
}

export default Logo
