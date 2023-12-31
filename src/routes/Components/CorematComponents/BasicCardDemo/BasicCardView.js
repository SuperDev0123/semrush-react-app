import React, { useContext } from 'react'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { Button, useTheme } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles'
import InfoIcon from '@material-ui/icons/Info'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { getBackground, getOverlay } from '@src/@jumbo/utils/corematDemoHelper'
import CmtCardContent from '@src/@coremat/CmtCard/CmtCardContent'
import CmtCardHeader from '@src/@coremat/CmtCard/CmtCardHeader'
import CmtCardFooter from '@src/@coremat/CmtCard/CmtCardFooter'
import CmtCardMedia from '@src/@coremat/CmtCard/CmtCardMedia'
import CmtAvatarGroup from '@src/@coremat/CmtAvatarGroup'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import CmtCard from '@src/@coremat/CmtCard'
import { coremat } from '@src/@fake-db'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    color: theme.palette.text.secondary,
    '& .Cmt-title': {
      color: theme.palette.text.primary,
    },
    '& .MuiCollapse-entered': {
      borderTop: `solid 1px ${theme.palette.borderColor.dark}`,
    },
  },
  textWhite: {
    color: theme.palette.common.white,
    '& .Cmt-sub-title, & .Cmt-title, & .MuiIconButton-root': {
      color: theme.palette.common.white,
    },
    '& .MuiCollapse-entered': {
      borderTop: 'solid 1px rgba(255, 255, 255, 0.12)',
    },
    '& .Cmtfooter-root': {
      borderTopColor: 'rgba(255, 255, 255, 0.12)',
    },
  },
}))

const actions = [
  {
    icon: <InfoIcon />,
    label: 'More Detail',
  },
  {
    icon: <CloseIcon />,
    label: 'Close',
  },
]

const BasicCardView = () => {
  const classes = useStyles()
  const {
    extraActions,
    avatarType,
    showAvatar,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    overlayOpacity,
    showCardMedia,
    showMainContent,
    showFooter,
  } = useContext(CorematContext)

  const { basicCard, background, overlay, avatars } = coremat
  const { header, content } = basicCard
  overlay.opacity = overlayOpacity
  const theme = useTheme()

  const textDyanimicClass = () => {
    if (
      (showBackground && backgroundStyle !== 'color') ||
      (showOverlay && overlayOpacity > 0.5)
    ) {
      return classes.textWhite
    }
  }

  const headerView = () => {
    return (
      <CmtCardHeader
        avatar={
          showAvatar && avatarType === 'icon-avatar' ? (
            <CmtAvatar color="primary" size="large">
              <AllInclusiveIcon fontSize="small" />
            </CmtAvatar>
          ) : showAvatar && avatarType === 'avatar' ? (
            <CmtAvatar src={header.avatar} alt="Avatar" size="large" />
          ) : null
        }
        icon={showAvatar && avatarType === 'icon' ? <AllInclusiveIcon /> : null}
        title={header.title}
        subTitle={header.subTitle}
        actions={actions}
        actionHandleIcon={<MoreVertIcon />}
      >
        {extraActions && <Button color="primary">View Demo</Button>}
      </CmtCardHeader>
    )
  }

  const footerView = () => {
    return (
      <CmtCardFooter
        separator={{
          color: theme.palette.borderColor.dark,
          borderWidth: 1,
          borderStyle: 'solid',
        }}
      >
        <Box display="flex" alignItems="center" width={1}>
          <Box mr={4}>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginLeft: 14 }}
            >
              View Demo
            </Button>
          </Box>

          <CmtAvatarGroup
            items={avatars}
            srcKey="profile_pic"
            max={5}
            avatarSize={34}
          />
        </Box>
      </CmtCardFooter>
    )
  }

  return (
    <CmtCard
      className={clsx(classes.cardRoot, textDyanimicClass())}
      {...getBackground(showBackground, backgroundStyle, background)}
      {...getOverlay(showOverlay, overlayStyle, overlay)}
    >
      {headerView()}
      {showCardMedia && <CmtCardMedia image={basicCard.media} />}
      {showMainContent && (
        <CmtCardContent>
          <Typography variant="body2" component="p">
            {content.description}
          </Typography>
        </CmtCardContent>
      )}
      {showFooter && footerView()}
    </CmtCard>
  )
}

export default BasicCardView
