import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import { alpha, makeStyles } from '@material-ui/core/styles'

import CmtList from '@src/@coremat/CmtList'
import ListEmptyResult from '@src/@coremat/CmtList/ListEmptyResult'

import PropertyItem from './PropertyItem'

const useStyles = makeStyles((theme) => ({
  newsListRoot: {
    padding: 24,
    transition: 'all .2s',
    '&:not(:first-child)': {
      borderTop: `solid 1px ${theme.palette.borderColor.main}`,
    },
    '& .fav-btn': {
      opacity: 0,
      visibility: 'hidden',
    },
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      transform: 'translateY(-4px)',
      boxShadow: `0 3px 10px 0 ${alpha(theme.palette.common.dark, 0.2)}`,
      '& .fav-btn': {
        opacity: 1,
        visibility: 'visible',
      },
    },
  },
}))

const PropertiesDataList = ({ data, onPropertyClick, timeFactory }) => {
  const classes = useStyles()
  return (
    <CmtList
      data={data}
      renderRow={(item, index) => (
        <ListItem component="div" className={classes.newsListRoot} key={index}>
          <PropertyItem
            index={index}
            timeFactory={timeFactory}
            item={item}
            onPropertyClick={onPropertyClick}
          />
        </ListItem>
      )}
      ListEmptyComponent={
        <ListEmptyResult
          title="No Result"
          content="No result found with your search"
        />
      }
    />
  )
}

export default PropertiesDataList
