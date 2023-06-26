import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import { coremat } from '@src/@fake-db/coremat-components'
import CmtMediaObject from '@src/@coremat/CmtMediaObject'
import { JumboCard } from '@src/@jumbo/components/Common'
import CmtCarousel from '@src/@coremat/CmtCarousel'

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    padding: 1,
    '& .Cmt-media-object': {
      paddingLeft: 20,
      paddingRight: 20,
    },
    '& .Cmt-avatar': {
      height: 80,
      width: 80,
    },
    '& .Cmt-media-header': {
      marginBottom: 12,
    },
    '& .Cmt-media-image': {
      marginRight: 8,
    },
  },
  titleRoot: {
    fontSize: 16,
  },
  descText: {
    color: theme.palette.text.secondary,
  },
}))

const CarouselView = () => {
  const classes = useStyles()
  const { dotPosition, dotStyle, settings } = useContext(CorematContext)
  const { carouselImages } = coremat

  const renderRow = (item, index) => {
    return (
      <Box key={index} className={classes.itemRoot}>
        <JumboCard>
          <CmtMediaObject
            avatar={item.profile_pic}
            avatarPos="center"
            title={item.title}
            titleProps={{ className: classes.titleRoot }}
          >
            <Typography variant="body2" className={classes.descText}>
              {item.description}
            </Typography>
          </CmtMediaObject>
        </JumboCard>
      </Box>
    )
  }

  return (
    <CmtCarousel
      outline={dotStyle === 'outline'}
      color="#6200EE"
      activeColor="#6200EE"
      dotSize={10}
      settings={settings}
      data={carouselImages}
      dotPosition={dotPosition}
      renderRow={renderRow}
    />
  )
}

export default CarouselView
