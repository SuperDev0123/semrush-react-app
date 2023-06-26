import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import IPopper from './IPopper'
import VisibilityIcon from '@material-ui/icons/Visibility'
import clsx from 'clsx'

import './PreviewButtonNew.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    '& .info-box': {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '3px',
        right: '-12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '& .helper-icon': {
        top: 15,
        position: 'relative',
        left: -5,
        color: theme.palette.primary.dark,
        [theme.breakpoints.down('sm')]: {
          right: 0,
          top: 0,
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      position: 'relative',
    },
  },
  previewButton: {
    padding: '16px 32px 16px 55px',
    margin: '15px 10px',
    borderRadius: 10,
    fontSize: 18,
    lineHeight: '24px',
    textTransform: 'uppercase',
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '21px',
      margin: '5px 10px',
      width: '100% !important',
    },
    '& .info-box': {
      position: 'absolute',
      top: 3,
      right: 6,
      '& .helper-icon': {
        color: '#ffffff',
        fontSize: 16,
        top: -3,
        position: 'relative',
        left: -2,
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
      },
    },
    '&.pad-equal': {
      padding: '15px 30px 15px 30px',
      width: 220,
      backgroundColor: theme.palette.primary.dark,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
}))

const PreviewButton = ({
  btnText,
  infoText,
  additionalClass,
  hasIcon,
  icon,
  handleClick,
  isLoading,
  ...rest
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClick}
        {...rest}
        className={clsx(
          classes.previewButton,
          additionalClass,
          'continueBtn',
          `${isLoading ? 'isDisabled' : ''}`
        )}
        endIcon={hasIcon && icon}
      >
        {isLoading && <span className="loader"></span>}
        {btnText}
      </Button>
      {infoText && infoText !== '' && <IPopper>{infoText}</IPopper>}
    </Box>
  )
}

PreviewButton.propTypes = {
  icon: PropTypes.element,
  btnText: PropTypes.string,
  infoText: PropTypes.string,
  additionalClass: PropTypes.string,
  hasIcon: PropTypes.bool,
}
PreviewButton.defaultProps = {
  icon: <VisibilityIcon />,
  btnText: '',
  infoText: '',
  additionalClass: '',
  hasIcon: true,
}

export default PreviewButton
