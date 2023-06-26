import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { When } from '../'

const useStyles = makeStyles({
  LoadingIndicator: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
})

const LoadingIndicator = (props) => {
  const classes = useStyles()

  return (
    <When condition={props.isLoading}>
      <Typography variant="h4" className={classes.LoadingIndicator}>
        Loading...
      </Typography>
    </When>
  )
}

export default LoadingIndicator
