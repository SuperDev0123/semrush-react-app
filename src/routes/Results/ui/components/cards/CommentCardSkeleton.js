import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import { SkeletonLoader } from '@src/common/components'

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F6F6F6',
    margin: '.5rem 0',
    padding: '14px',
  },
  textSkeleton: {
    margin: '5px 0',
  },
}))
const CommentCardSkeleton = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SkeletonLoader
          animation="wave"
          variant="circle"
          width={50}
          height={50}
          style={{ marginRight: 12 }}
        />
        <SkeletonLoader
          animation="wave"
          variant="rect"
          width={'20%'}
          height={15}
        />
      </Box>
      <Box>
        <SkeletonLoader
          className={classes.textSkeleton}
          animation="wave"
          variant="rect"
          width={'20%'}
          height={10}
        />
        <SkeletonLoader
          className={classes.textSkeleton}
          animation="wave"
          variant="text"
          width={'100%'}
          height={10}
        />
        <SkeletonLoader
          className={classes.textSkeleton}
          animation="wave"
          variant="text"
          width={'100%'}
          height={10}
        />
      </Box>
    </Box>
  )
}

export default CommentCardSkeleton
