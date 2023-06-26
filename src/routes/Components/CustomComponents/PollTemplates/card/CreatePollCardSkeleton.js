import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { SkeletonLoader } from '@src/common/components'

const createStyle = makeStyles((theme) => ({
  root: {
    background: theme.palette.common.white,
    width: '100%',
    padding: '19px',
    borderRadius: '5px',
    marginTop: '5px',
  },
  cardSection: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  text: {
    flex: '1',
  },
  percentage: {
    width: '20%',
  },
  progress: {
    marginBottom: '.5rem',
  },
}))

const CreatePollCardSkeleton = () => {
  const classes = createStyle()
  return (
    <Box className={classes.root}>
      <Box className={classes.cardSection}>
        <Box className={classes.text}>
          <SkeletonLoader
            className={classes.progress}
            animation="wave"
            variant="rect"
            width={'70%'}
            height={20}
          />
          <SkeletonLoader
            className={classes.progress}
            animation="wave"
            variant="rect"
            width={'90%'}
            height={20}
          />
        </Box>
        <Box className={classes.percentage}>
          <SkeletonLoader
            className={classes.progress}
            animation="wave"
            variant="rect"
            width={'100%'}
            height={20}
          />
          <SkeletonLoader
            className={classes.progress}
            animation="wave"
            variant="rect"
            width={'80%'}
            height={20}
          />
        </Box>
      </Box>
      <SkeletonLoader
        className={classes.progress}
        animation="wave"
        variant="rect"
        width={180}
        height={20}
      />
    </Box>
  )
}

export default CreatePollCardSkeleton
