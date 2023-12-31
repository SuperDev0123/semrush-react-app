import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(4),
    },
  },
}))

export default function CircularStatic() {
  const classes = useStyles()
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      )
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box className={classes.root}>
      <CircularProgress variant="static" value={25} />
      <CircularProgress variant="static" value={50} />
      <CircularProgress variant="static" value={75} />
      <CircularProgress variant="static" value={100} />
      <CircularProgress variant="static" value={progress} />
    </Box>
  )
}
