import React, { useContext } from 'react'
import { Button, makeStyles, useTheme } from '@material-ui/core'
import AllInclusiveIcon from '@material-ui/icons/AllInclusive'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import InfoIcon from '@material-ui/icons/Info'
import Box from '@material-ui/core/Box'
import clsx from 'clsx'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { getBackground, getOverlay } from '@src/@jumbo/utils/corematDemoHelper'
import CmtAdvCardContent from '@src/@coremat/CmtAdvCard/CmtAdvCardContent'
import CmtCardFooter from '@src/@coremat/CmtCard/CmtCardFooter'
import CmtCardHeader from '@src/@coremat/CmtCard/CmtCardHeader'
import CmtDropdownMenu from '@src/@coremat/CmtDropdownMenu'
import CmtAvatarGroup from '@src/@coremat/CmtAvatarGroup'
import CmtAdvCard from '@src/@coremat/CmtAdvCard'
import CmtAvatar from '@src/@coremat/CmtAvatar'
import { coremat } from '@src/@fake-db'

import DemoChart from './DemoChart'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    color: theme.palette.text.secondary,
    '& .Cmt-title': {
      color: theme.palette.text.primary,
      marginBottom: 10,
    },
  },
  textWhite: {
    color: theme.palette.common.white,
    '& .Cmt-title, & .MuiButton-root, & .Cmt-sub-title, & .MuiIconButton-root':
      {
        color: theme.palette.common.white,
      },
  },
}))

const AdvComponentView = () => {
  const classes = useStyles()

  const {
    extraContent,
    extraActions,
    avatarType,
    showChildren,
    showAvatar,
    showBackground,
    backgroundStyle,
    showOverlay,
    overlayStyle,
    overlayOpacity,
    contentAlignCenter,
    headerAlignCenter,
    reverseDirection,
    showFooter,
  } = useContext(CorematContext)

  const { advancedCard, background, overlay, avatars } = coremat
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

  const menuItems = [
    {
      icon: <AllInclusiveIcon />,
      label: 'All Inclusive',
    },
    {
      icon: <InfoIcon />,
      label: 'See View',
    },
    {
      label: 'Create New',
    },
  ]

  const handleItemClick = (item) => {
    if (item.key === 'create') item.disabled = true

    return item
  }

  const headerView = () => {
    return (
      <CmtCardHeader
        alignCenter={headerAlignCenter}
        avatar={
          showAvatar && avatarType === 'icon-avatar' ? (
            <CmtAvatar color="primary" size="large">
              <AllInclusiveIcon fontSize="small" />
            </CmtAvatar>
          ) : showAvatar && avatarType === 'avatar' ? (
            <CmtAvatar src={advancedCard.avatar} alt="Avatar" size="large" />
          ) : null
        }
        icon={showAvatar && avatarType === 'icon' ? <AllInclusiveIcon /> : null}
        title={advancedCard.title}
        subTitle={advancedCard.subTitle}
        actions={menuItems}
        actionHandleIcon={<MoreVertIcon />}
      >
        {extraActions && <Button color="primary">View Demo</Button>}
      </CmtCardHeader>
    )
  }

  const contentView = () => {
    return (
      <CmtAdvCardContent
        title={advancedCard.contentTitle}
        titleProps={{ variant: 'body1' }}
        subTitle={advancedCard.contentSubTitle}
        subTitleProps={{ variant: 'body2' }}
        extraContent={
          extraContent && (
            <CmtDropdownMenu
              TriggerComponent={
                <Box mt={3}>
                  <Button
                    aria-controls="fade-menu"
                    aria-haspopup="true"
                    color="primary"
                    variant="contained"
                  >
                    Open Menu
                  </Button>
                </Box>
              }
              items={menuItems}
              onItemClick={handleItemClick}
            />
          )
        }
        reverseDir={reverseDirection}
        alignCenter={contentAlignCenter}
      >
        {showChildren && <DemoChart />}
      </CmtAdvCardContent>
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
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width={1}
        >
          <Button>View History</Button>

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
    <CmtAdvCard
      className={clsx(classes.cardRoot, textDyanimicClass())}
      {...getBackground(showBackground, backgroundStyle, background)}
      {...getOverlay(showOverlay, overlayStyle, overlay)}
    >
      {headerView()}
      {contentView()}
      {showFooter && footerView()}
    </CmtAdvCard>
  )
}

export default AdvComponentView
