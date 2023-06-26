import React, { useContext } from 'react'
import StarRateIcon from '@material-ui/icons/StarRate'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import JumboCard from '@src/@jumbo/components/Common/JumboCard'
import CmtObjectSummary from '@src/@coremat/CmtObjectSummary'
import { coremat } from '@src/@fake-db/coremat-components'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const ObjectSummaryView = () => {
  const classes = useStyles()
  const {
    alignment,
    badgeVerticalAlign,
    badgeHorizontalAlign,
    badgeOnItem,
    showBadge,
    badgeType,
    avatarVariant,
  } = useContext(CorematContext)
  const { avatar } = coremat

  return (
    <JumboCard>
      <Box className={classes.root}>
        <CmtObjectSummary
          avatar={avatar}
          title="John Smith"
          subTitle="Designer"
          showItemBadge={badgeOnItem}
          anchorOrigin={{
            vertical: badgeVerticalAlign,
            horizontal: badgeHorizontalAlign,
          }}
          avatarProps={{ variant: avatarVariant, size: 80 }}
          badge={
            showBadge &&
            (badgeType === 'counter' ? (
              32
            ) : (
              <React.Fragment>
                <StarRateIcon style={{ height: 18 }} />
                <Box pr={2}>4.5</Box>
              </React.Fragment>
            ))
          }
          align={alignment}
        />
      </Box>
    </JumboCard>
  )
}

export default ObjectSummaryView
