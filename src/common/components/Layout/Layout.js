import * as React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@material-ui/core'

import { useAuthUserQuery } from '@src/common/hooks'
import { isPublicURL } from '@src/common/functions/tools'
import VerticalPaged from '@src/@jumbo/components/AppLayout/VerticalLayouts/VerticalPaged'
import { verticalPagedStyles } from '@src/@jumbo/components/AppLayout/VerticalLayouts/VerticalPaged/styles'

const Layout = ({ children }) => {
  const classes = verticalPagedStyles()
  const location = useLocation()
  const checkURLIsPublic = isPublicURL(location)

  const { loadUser } = useSelector(({ auth }) => auth)

  const authUserQuery = useAuthUserQuery({ enabled: !checkURLIsPublic })

  if (!checkURLIsPublic && (!loadUser || authUserQuery.isLoading)) {
    return (
      <Box className={classes.circularProgressRoot}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <VerticalPaged isSharedResult={checkURLIsPublic}>{children}</VerticalPaged>
  )
}

export default Layout
