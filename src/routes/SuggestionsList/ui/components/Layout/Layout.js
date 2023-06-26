import * as React from 'react'
import pt from 'prop-types'
import { Box } from '@material-ui/core'

import CmtHeader from '@src/@coremat/CmtLayouts/Vertical/Header'
import { GuestFooter } from '../../partials'

import useLayoutStyles from './Layout.styles'
import Header from '@src/@jumbo/components/AppLayout/partials/Header'

import { useAuthUserQuery } from '@src/common/hooks'

const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  const user = useAuthUserQuery(true, localStorage.getItem('token'))
  const isLoggedIn = Boolean(user.data)
  return (
    <Box className={classes.layout}>
      <CmtHeader type={'fixed'}>
        <Header isSharedResult={!isLoggedIn} />
      </CmtHeader>
      <Box className={classes.bodyWrapper}>{children}</Box>
      <GuestFooter />
    </Box>
  )
}

Layout.propTypes = {
  children: pt.oneOfType([pt.arrayOf(pt.node), pt.node]).isRequired,
}

export default Layout
