import { Box, Paper } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import { SkeletonLoader } from '@src/common/components'

import useStyles from './QuickCard.style'

const QuickCard = ({
  title,
  description,
  children,
  footer,
  className,
  loading,
}) => {
  const classes = useStyles()
  if (loading) {
    return (
      <Paper className={clsx(classes.root, className)}>
        <Box className={classes.title}>
          <SkeletonLoader
            animation="wave"
            variant="rect"
            width={'100%'}
            height={20}
          />
        </Box>
        <Box className={classes.main}>
          <SkeletonLoader
            animation="wave"
            variant="rect"
            width={'100%'}
            height={200}
          />
        </Box>
      </Paper>
    )
  }
  return (
    <Paper className={clsx(classes.root, className)}>
      {title && <Box className={classes.title}>{title}</Box>}
      {description && <Box className={classes.main}>{description}</Box>}
      {children && <Box className={classes.main}>{children}</Box>}
      {footer && <Box className={classes.footer}>{footer}</Box>}
    </Paper>
  )
}
export default QuickCard
