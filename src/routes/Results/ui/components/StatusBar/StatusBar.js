import React, { useEffect, useState } from 'react'
import useStyles from './StatusBar.style'
import { statusColor } from '@src/common/data'
import { Box, Typography } from '@material-ui/core'
const StatusBar = ({ status, message }) => {
  const classes = useStyles()
  const [relStatus, setRelStatus] = useState(statusColor[0])

  useEffect(() => {
    const value = statusColor.filter((sta) => sta.status === status)
    if (value && value.length > 0) {
      setRelStatus(value[0])
    }
  }, [status])
  return (
    <Box
      className={classes.root}
      style={{
        background: relStatus
          ? relStatus.gradient
          : 'linear-gradient(254deg, rgba(207,206,205,1) 0%, rgba(255,254,253,1) 50%)',
      }}
    >
      <img
        src={`/images/icons/${relStatus.icon}.svg`}
        alt="trophy icon"
        className={classes.icons}
      />
      <Typography className={classes.statusText}>
        {message || relStatus.description}
      </Typography>
    </Box>
  )
}

export default StatusBar
