import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Box, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { SkeletonLoader } from '@src/common/components'

const useStyles = makeStyles(() => ({
  avatar: {
    marginRight: '1rem',
  },
  jumbotron: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '1.5rem',
    backgroundColor: '#f4f4f4',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    background:
      "linear-gradient(rgba(1, 106, 233,.7), rgba(1, 106, 233,.5)),url('/images/dashboard/banner.png')",
  },
  title: {
    fontSize: '1.5rem',
    color: '#fff',
    marginRight: '3px',
    fontFamily: 'Poppins Bold',
    lineHeight: '27px',
  },
  gratings: {
    fontSize: '1.1rem',
    color: '#fff',
    fontFamily: 'Poppins Bold',
  },
  large: {
    width: '64px',
    height: '64px',
    fontSize: '2rem',
    fontFamily: 'Poppins Bold',
  },
}))

const Jumbotron = ({ title, gratings, alt, src, name, loading }) => {
  const classes = useStyles()
  const getPlaceholderChar = (str) => {
    if (str) {
      return str.substr(0, 1).toUpperCase()
    }
  }

  return (
    <Box
      className={classes.jumbotron}
      style={{ background: loading && '#fff' }}
    >
      <Box className={classes.avatar}>
        {loading ? (
          <SkeletonLoader
            animation="wave"
            variant="circle"
            width={60}
            height={60}
          />
        ) : (
          <Avatar alt={name} src={src} className={classes.large}>
            {!src && !name && alt
              ? getPlaceholderChar(alt)
              : name.charAt(0).toUpperCase()}
          </Avatar>
        )}
      </Box>

      <Box sx={{ flex: '1' }}>
        {loading ? (
          <SkeletonLoader
            animation="wave"
            height={20}
            width="100%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          <Typography className={classes.gratings}>{gratings},</Typography>
        )}
        {loading ? (
          <SkeletonLoader animation="wave" height={20} width="80%" />
        ) : (
          <Typography className={classes.title}>{title}</Typography>
        )}
      </Box>
    </Box>
  )
}

export default Jumbotron
