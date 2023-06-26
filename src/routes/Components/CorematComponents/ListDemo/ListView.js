import React, { useContext } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Typography, makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import CorematContext from '@src/@jumbo/components/contextProvider/CorematContext'
import CmtListPagination from '@src/@coremat/CmtList/CmtListPagination'
import ListEmptyResult from '@src/@coremat/CmtList/ListEmptyResult'
import { coremat } from '@src/@fake-db/coremat-components'
import CmtMediaObject from '@src/@coremat/CmtMediaObject'
import { JumboCard } from '@src/@jumbo/components/Common'
import CmtList from '@src/@coremat/CmtList'

const useStyles = makeStyles((theme) => ({
  itemRoot: {
    padding: 1,
    '& .Cmt-avatar': {
      height: 56,
      width: 56,
    },
    '& .Cmt-media-header': {
      marginBottom: 8,
    },
    '& .Cmt-media-image': {
      marginRight: 12,
      marginTop: 0,
    },
  },
  titleRoot: {
    fontSize: 16,
  },
  descText: {
    color: theme.palette.text.secondary,
  },
}))

const ListView = () => {
  const classes = useStyles()
  const {
    showBorder,
    resultEmpty,
    initLoader,
    showFooter,
    paginationType,
    position,
    loadMore,
  } = useContext(CorematContext)
  const { carouselImages } = coremat

  const getData = () => {
    if (resultEmpty) return []
    return carouselImages
  }

  const renderRow = (item, index) => {
    return (
      <Box mb={2} key={index} className={classes.itemRoot}>
        <JumboCard>
          <CmtMediaObject
            avatar={item.profile_pic}
            title={item.title}
            titleProps={{ className: classes.titleRoot }}
          >
            <Typography className={classes.descText} variant="body2">
              {item.description}
            </Typography>
          </CmtMediaObject>
        </JumboCard>
      </Box>
    )
  }

  const handleEndReached = () => {}

  return (
    <PerfectScrollbar style={{ maxHeight: 350 }}>
      {paginationType === 'pagination' ? (
        <CmtListPagination
          paginationProps={{ page: 1, count: 5 }}
          position={position}
          data={getData()}
          renderRow={renderRow}
          border={showBorder}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <ListEmptyResult
              loader={initLoader}
              title="No Data Found"
              content="Empty result description"
              actionTitle="Add Content"
            />
          }
        />
      ) : (
        <CmtList
          data={getData()}
          renderRow={renderRow}
          border={showBorder}
          onEndReached={handleEndReached}
          ListEmptyComponent={
            <ListEmptyResult
              loader={initLoader}
              title="No Data Found"
              content="Empty result description"
              actionTitle="Add Content"
            />
          }
          footerProps={
            showFooter
              ? {
                  loading: loadMore,
                  footerText: 'No more content',
                }
              : null
          }
        />
      )}
    </PerfectScrollbar>
  )
}

export default ListView
