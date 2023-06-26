import React, { useContext } from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import JumboCard from '@src/@jumbo/components/Common/JumboCard'
import { coremat } from '@src/@fake-db/coremat-components'
import CmtAvatar from '@src/@coremat/CmtAvatar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const AvatarView = () => {
  const classes = useStyles()
  const { variant, size, color } = useContext(CorematContext)

  return (
    <JumboCard>
      <Box className={classes.root}>
        <CmtAvatar
          color={color}
          size={size}
          variant={variant}
          src={coremat.avatar}
          alt="avatar"
        />
        <CmtAvatar color={color} size={size} variant={variant}>
          NP
        </CmtAvatar>
        <CmtAvatar color={color} size={size} variant={variant}>
          <FavoriteIcon />
        </CmtAvatar>
        <CmtAvatar color={color} size={size} variant={variant} />
      </Box>
    </JumboCard>
  )
}

export default AvatarView
