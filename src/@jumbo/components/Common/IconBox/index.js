import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const IconBox = ({ iconInfo }) => {
  const { imgSrc, isComplete, title } = iconInfo

  const useStyles = makeStyles((theme) => ({
    checkIcon: {
      fontSize: 40,
      top: '-21px',
      left: 'calc(50% - 15px)',
      position: 'absolute',
      borderRadius: '50%',
    },
    iconBoxRoot: {
      '& label': {
        fontSize: '24px',
        lineHeight: '28px',
      },
    },
    iconBox: {
      width: 165,
      height: 165,
      display: 'grid',
      placeContent: 'center',
      backgroundColor: theme.palette.primary.dark,
      borderRadius: '50%',
      position: 'relative',
      margin: '15px 15px 25px',
    },
    iconlabel: {
      fontFamily: "'made_tommyregular', sans-serif",
      fontSize: 24,
      lineHeight: '30px',
      color: theme.palette.primary.dark,
    },
  }))

  const classes = useStyles()

  return (
    <Box className={classes.iconBoxRoot}>
      <Box className={classes.iconBox}>
        {isComplete && (
          <img src="/images/check-mark.svg" className={classes.checkIcon} />
        )}
        <img src={imgSrc} />
      </Box>
      <label className={classes.iconlabel}>{title}</label>
    </Box>
  )
}

export default IconBox
