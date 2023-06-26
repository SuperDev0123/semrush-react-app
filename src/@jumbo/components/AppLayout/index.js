import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Box, CircularProgress } from '@material-ui/core'

import globalStyles from '@src/common/config/theme/GlobalCss'
import { isPublicURL } from '@src/common/functions/tools'
import { useAuthUserQuery } from '@src/common/hooks'
import VerticalPaged from '@src/@jumbo/components/AppLayout/VerticalLayouts/VerticalPaged'

import { verticalPagedStyles } from './VerticalLayouts/VerticalPaged/styles'

const AppLayout = ({ children }) => {
  const classes = verticalPagedStyles()
  const location = useLocation()
  const checkURLIsPublic = isPublicURL(location)

  const { loadUser } = useSelector(({ auth }) => auth)

  const authUserQuery = useAuthUserQuery({ enabled: !checkURLIsPublic })

  globalStyles()

  if (checkURLIsPublic) {
    return <VerticalPaged isSharedResult={true}>{children}</VerticalPaged>
  }

  if (!loadUser || authUserQuery.isLoading) {
    return (
      <Box className={classes.circularProgressRoot}>
        <CircularProgress />
      </Box>
    )
  }

  return <VerticalPaged>{children}</VerticalPaged>
}

export default AppLayout
