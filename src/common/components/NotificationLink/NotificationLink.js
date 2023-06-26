import React from 'react'
import pt from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(() => ({
  strong: {
    color: '#0A3D80',
    fontWeight: 'bold',
    fontSize: '13px',
    marginLeft: '5px',
    cursor: 'pointer',
  },
}))

const NotificationLink = ({ onClick, title }) => {
  const classes = useStyles()

  return (
    <Link onClick={onClick}>
      <strong className={classes.strong}>{title}</strong>
    </Link>
  )
}

NotificationLink.propTypes = {
  onClick: pt.func.isRequired,
  title: pt.string.isRequired,
}

export default NotificationLink
