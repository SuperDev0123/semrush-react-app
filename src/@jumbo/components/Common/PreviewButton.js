import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import IPopper from './IPopper'
import VisibilityIcon from '@material-ui/icons/Visibility'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  previewButton: {
    padding: '16px 32px 16px 55px',
    borderRadius: 10,
    fontSize: 18,
    lineHeight: '24px',
    textTransform: 'uppercase',
    position: 'relative',
    margin: '18px auto',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
      lineHeight: '21px',
    },
    '& .info-box': {
      position: 'absolute',
      left: 25,
      top: 11,
      '& .helper-icon': {
        color: '#ffffff',
        fontSize: 19,
      },
    },
    '& .MuiSvgIcon-root': {
      fontSize: 30,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
      },
    },
    '&.pad-equal': {
      padding: '16px 32px 16px 32px',
      marginTop: -15,
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
  isDisabled,
}) => {
  const classes = useStyles()
  return (
    <Button
      disabled={isDisabled}
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClick}
      className={clsx(classes.previewButton, additionalClass)}
      endIcon={hasIcon && icon}
    >
      {infoText && infoText !== '' && <IPopper>{infoText}</IPopper>}
      {btnText}
    </Button>
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
